package com.a301.newsseug.domain.auth.model.entity;

import com.a301.newsseug.domain.member.model.entity.ProviderType;
import java.util.Map;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Getter
@AllArgsConstructor
public class KakaoUserDetails implements OAuth2UserDetails {

    private Map<String, Object> attributes;

    @Override
    public ProviderType getProvider() {
        return ProviderType.KAKAO;
    }

    @Override
    public String getProviderId() {
        return attributes.get("id").toString();
    }

}
