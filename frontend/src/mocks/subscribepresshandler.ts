import { http, HttpResponse } from 'msw';
import articlePagination from 'mocks/articlePagination.json';
const BASE_URL = 'https://j11a301.p.ssafy.io/api/v1';

export const subscribepresshandlers = [
  // POST 요청을 가로채는 핸들러
  http.post(`${BASE_URL}/members/press/:pressId`, (req) => {
    const { pressId } = req.params; // URL에서 pressId를 추출

    // 응답 생성
    return HttpResponse.json({
      message: `Press with ID ${pressId} subscribed successfully.`,
    });
  }),
];

export const pressArticlePaginationhandlers = [
  http.get(BASE_URL + '/articles/press/:pressId', ({ request }) => {
    const pageNumber =
      Number(new URL(request.url).searchParams.get('page')) || 1;
    const startIdx = (pageNumber - 1) * 5;
    const endIdx = pageNumber * 5;
    const paginatedArticles = articlePagination.articlesPagination.slice(
      startIdx,
      endIdx,
    );
    const hasNextPage = endIdx < articlePagination.articlesPagination.length;
    return HttpResponse.json({
      data: {
        sliceDetails: {
          currentPage: pageNumber,
          hasFirst: pageNumber === 0,
          hasNext: hasNextPage,
        },
        content: paginatedArticles,
      },
    });
  }),
];

export const pressPressArticlePaginationhandlers = [
  http.get(BASE_URL + '/articles/press', ({ request }) => {
    const pageNumber =
      Number(new URL(request.url).searchParams.get('page')) || 1;
    const startIdx = (pageNumber - 1) * 5;
    const endIdx = pageNumber * 5;
    const paginatedArticles = articlePagination.articlesPagination.slice(
      startIdx,
      endIdx,
    );
    const hasNextPage = endIdx < articlePagination.articlesPagination.length;
    return HttpResponse.json({
      data: {
        sliceDetails: {
          currentPage: pageNumber,
          hasFirst: pageNumber === 0,
          hasNext: hasNextPage,
        },
        content: paginatedArticles,
      },
    });
  }),
];
