package com.a301.newsseug.domain.member.model.entity;

import com.a301.newsseug.global.model.entity.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Entity
@Table(name = "members")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    private String nickname;

    @Column(updatable = false)
    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Column(updatable = false)
    private LocalDateTime birth;

    @Embedded
    private OAuth2Details OAuth2Details;

    @Setter
    private String refreshToken;

    @Builder
    public Member(
            String nickName, Gender gender, LocalDateTime birth,
            OAuth2Details OAuth2Details,
            Role role
    ) {
        this.nickname = nickName;
        this.gender = gender;
        this.birth = birth;
        this.OAuth2Details = OAuth2Details;
    }

}
