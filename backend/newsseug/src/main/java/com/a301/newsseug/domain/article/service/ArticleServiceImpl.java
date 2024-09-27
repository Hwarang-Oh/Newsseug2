package com.a301.newsseug.domain.article.service;

import com.a301.newsseug.domain.article.model.dto.SimpleArticleDto;
import com.a301.newsseug.domain.article.model.dto.response.*;
import com.a301.newsseug.domain.article.model.entity.Article;
import com.a301.newsseug.domain.article.model.entity.type.CategoryType;
import com.a301.newsseug.domain.article.repository.ArticleRepository;
import com.a301.newsseug.domain.auth.model.entity.CustomUserDetails;
import com.a301.newsseug.domain.interaction.model.dto.SimpleHateDto;
import com.a301.newsseug.domain.interaction.model.dto.SimpleLikeDto;
import com.a301.newsseug.domain.interaction.repository.HateRepository;
import com.a301.newsseug.domain.interaction.repository.LikeRepository;
import com.a301.newsseug.domain.member.model.entity.Member;
import com.a301.newsseug.domain.member.repository.SubscribeRepository;
import com.a301.newsseug.domain.press.model.entity.Press;
import com.a301.newsseug.domain.press.repository.PressRepository;
import com.a301.newsseug.global.model.entity.PaginationDetail;
import com.a301.newsseug.global.util.ClockUtil;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Transactional
@Service
@RequiredArgsConstructor
public class ArticleServiceImpl implements ArticleService {

    private final ArticleRepository articleRepository;
    private final PressRepository pressRepository;
    private final LikeRepository likeRepository;
    private final HateRepository hateRepository;
    private final SubscribeRepository subscribeRepository;

    @Override
    public TodayArticlesResponse getHomeArticles() {

        LocalDateTime startOfDay = ClockUtil.getLocalDateTime().toLocalDate().atStartOfDay();
        LocalDateTime endOfDay = startOfDay.plusDays(1);
        List<Article> todayArticles = articleRepository.findByCreatedAtBetween(startOfDay, endOfDay);

        return TodayArticlesResponse.of(
                mapToListArticleResponse(todayArticles)
        );

    }

    @Override
    public AllArticlesResponse getAllArticles() {

        List<Article> allArticles = articleRepository.findAllByOrderByCreatedAtDesc();

        return AllArticlesResponse.of(
                mapToListArticleResponse(allArticles)
        );

    }

    @Override
    public ListArticleResponse getArticlesByCategory(String categoryName) {

        CategoryType categoryType = CategoryType.valueOf(categoryName.toUpperCase());

        List<Article> articles = articleRepository.findByCategoryOrderByCreatedAtDesc(categoryType);

        return mapToListArticleResponse(articles);

    }

    @Override
    @Transactional(readOnly = true)
    public GetArticleListResponse getArticleList(CustomUserDetails userDetails, int page) {

        Member loginMember = userDetails.getMember();

        PageRequest pageRequest = PageRequest.of(page, 10);
        Page<Article> articlesPage = articleRepository.findAll(pageRequest);

        List<GetArticleResponse> articles = articlesPage.getContent().stream()
                .map(article -> {
                    Press press = article.getPress();
                    Boolean isSubscribe = subscribeRepository.existsByMemberAndPress(loginMember, press);
                    Boolean isLike = likeRepository.existsByMemberAndArticle(loginMember, article);
                    Integer likeCount = likeRepository.countByArticle(article);
                    Boolean isHate = hateRepository.existsByMemberAndArticle(loginMember, article);
                    Integer hateCount = hateRepository.countByArticle(article);

                    return GetArticleResponse.of(
                            article,
                            isSubscribe,
                            SimpleLikeDto.of(isLike, likeCount),
                            SimpleHateDto.of(isHate, hateCount)
                    );
                })
                .toList();

        PaginationDetail paginationDetail = PaginationDetail.of(
                articlesPage.getTotalPages(),
                articlesPage.getTotalElements(),
                articlesPage.getNumber()
        );

        return GetArticleListResponse.of(articles, paginationDetail);
    }

    /**
     * Article 리스트를 ListArticleResponse 리스트로 변환하는 메서드
     */
    private ListArticleResponse mapToListArticleResponse(List<Article> articles) {

        return ListArticleResponse.of(
                articles.stream()
                    .map(SimpleArticleDto::of)
                    .toList()
        );

    }

    /**
     * Press ID를 통해 해당 언론사의 이름을 가져오는 메서드
     */
    private String getPressName(Long pressId) {

        Press press = pressRepository.getOrThrow(pressId);

        return press.getPressBranding().getName();

    }
}
