import {Github} from "react-bootstrap-icons";

function Section_3(){
    return(
        <section id="section_3">
            <div className="flex wrap">
                <div className="title flex wrap w100">
                    <div>
                        <h1>소리손순
                            <ul className="link_icon">
                                <li><a target="_blank" href="https://github.com/sign-muscat"><Github/></a></li>
                                <li><a target="_blank"
                                       href="https://www.notion.so/e6b855c636c9476096970c04c5ea9ad1?v=e2781acdf21d4ad3922d86ce4f24186d"><img
                                    src="/images/Shape.png"/></a></li>
                            </ul>
                        </h1>
                        <span className="pointStrong"><strong>청각 장애인</strong>과의 언어장벽 해소를 위해 소리, 손, 입술(순)을 컨셉으로, 의사소통을 학습하는 게임 서비스</span>
                    </div>
                    <div className="side_info">
                        <p>팀 구성: 5명</p>
                        <p>역할 : 팀장</p>
                        <span>24.07.16 ~ 24.08.23</span>
                    </div>
                </div>
                <div className="project">
                    <ul className="preview">
                        <li><img src="/images/sorisonsoon_main.png"/></li>
                        <li><img src="/images/sorisonsoon_hand.gif"/></li>
                        <li><img src="/images/sorisonsoon_lip.gif"/></li>
                        <li><img src="/images/sorisonsoon_sound.gif"/></li>
                    </ul>
                    <dl className="stack">
                        <dt>프론트엔드</dt>
                        <dd>JavaScript, React, Redux, Axios, BootStrap</dd>
                    </dl>
                    <dl>
                        <dt>백엔드</dt>
                        <dd>Java, Spring Boot, Spring AI, SpringSecurity, JWT, Python, FastAPI, MariaDB</dd>
                    </dl>
                    <dl>
                        <dt>배포</dt>
                        <dd>Vercel, AWS, Docker</dd>
                    </dl>
                    <dl>
                        <dt>도구</dt>
                        <dd>Github, Github Actions, Figma, Notion</dd>
                    </dl>
                    <ul>
                        <li>
                            <h2>프로젝트 리딩 및 일정 관리 </h2>
                            <ul>
                                <li>- 원활한 진행을 위한 매일 아침 진행 상황 공유 회의 주도</li>
                                <li>- 회고 미팅을 도입하여 팀 전체의 개선점 및 성과를 되돌아 보는 시간 마련</li>
                                <li>- Github Projects를 WBS로 활용하여 이터레이션 단위로 일정 및 작업 관리</li>
                                <li>- 팀원들의 GitHub 활용도를 높이기 위해 Git/GitHub 기초 자료 제작 및 실습형 미니 강의 진행</li>
                                <li>- 노션(Notion)에 회의록을 작성·공유하여 불참 팀원도 회의 내용을 쉽게 파악할 수 있도록 관리</li>
                                <li>- 개발 중 발생한 문제에 대해 팀원들의 문제 해결 적극 지원</li>
                            </ul>
                        </li>
                        <li>
                            <h2>회원 인증·보안 기능 구현</h2>
                            <ul>
                                <li>- Access Token 만료 시 Refresh Token으로 새로운 Access Token을 발급하도록 구현하여, 사용자 경험을 끊김 없이 유지하고
                                    보안성을 확보
                                </li>
                                <li>- Spring Security와 JJWT를 활용한 JWT 기반 인증/인가 로직을 설계·구현하여, 세션리스 환경에서도 안전하게 사용자 권한을 검증
                                </li>
                                <li>- 토큰 파싱 유틸(TokenUtils)을 작성해 Bearer 스킴 처리 및 클레임(유저명·권한) 추출을 통합, 코드 재사용성과 유지보수성을 높임
                                </li>
                                <li>- 회원가입 시 이메일 인증 번호 발송/검증 API를 개발하고, 임시 토큰 암호화 및 유효 시간 검증을 적용하여, 잘못된 가입과 인증 우회 위험을
                                    방지
                                </li>
                                <li>- 잘못된 코드·만료·미가입 이메일 등 다양한 예외 상황을 상태 코드와 메시지로 세분화 처리하여, 클라이언트에서 명확한 피드백 제공</li>
                                <li>- jwt.secret을 환경 변수로 관리하고, 토큰 클레임/만료일 추출 메서드를 분리하여, 키 노출 위험 최소화 및 유지보수성과 확장성 확보</li>
                                <li>- 추후 Refresh Token Rotation(RTR) 도입을 고려해 토큰 관리 모듈을 분리 설계하여, 향후 보안 강화 및 확장 대응 용이</li>
                            </ul>
                        </li>
                        {/*<li>*/}
                        {/*    <h2>회원 인증·보안 기능 구현</h2>*/}
                        {/*    <ul>*/}
                        {/*        <li>- 엑세스 토큰 탈취 위험을 감소시키기 위해 리프레시 토큰을 설정하고 기본 재발급 구조 적용</li>*/}
                        {/*        <li>- 기본 구조로는 리프레시 토큰 탈취 위험이 있음을 파악하고, 추후 Refresh Token Rotation(RTR) 로 대응할 것을 고려해 토큰 관리 모듈을 전면 분리 설계 수정</li>*/}
                        {/*        <li>- 토큰 만료·재발급 및 클레임(유저명·권한) 추출 로직 설계로 안전한 세션리스 인증 구조 확립</li>*/}
                        {/*        <li>- Bearer 스킴 처리 및 토큰 파싱 유틸(<code>TokenUtils</code>) 작성으로 재사용성과 유지보수성 향상</li>*/}
                        {/*        <li>- <b>이메일 인증 플로우</b> : 회원가입 시 인증번호 발송/검증 API 개발, 임시 토큰 암호화(encryptToken)와 유효 시간 검증으로 이중 보안 적용</li>*/}
                        {/*        <li>- 잘못된 코드·만료·미가입 이메일 등 다양한 예외 상황에 대해 상태 코드 및 메시지 세분화 처리</li>*/}
                        {/*        <li>- jwt.secret을 환경 변수로 관리하여 키 노출 방지, 토큰 클레임·만료일 추출 유틸 메서드로 유지보수성과 확장성 확보</li>*/}
                        {/*    </ul>*/}
                        {/*</li>*/}
                        <li>
                            <h2>입모양 게임 구현</h2>
                            <ul>
                                <li>- Spring Scheduler를 활용해 자정마다 문제 pool에서 문제를 자동 출제하여, 사용자가 매일 새로운 학습 콘텐츠를 경험하도록 유도
                                </li>
                                <li>- 오답 제출 시 Spring AI로 임베딩을 활용해 정답과의 유사도를 측정함으로써, 정답과 근접한 학습 피드백을 제공하여 학습 효율 향상</li>
                                <li>- 인물 정면 사진을 LivePortrait 모델로 입모양 문제 영상으로 변환하여, 시각적 몰입감과 직관적 학습 경험을 강화</li>
                            </ul>
                        </li>
                        {/*<li>*/}
                        {/*    <h2>입모양 게임 구현 </h2>*/}
                        {/*    <ul>*/}
                        {/*        <li>- Spring Scheduler를 통해 자정마다 문제 pool에서 하나의 문제를 골라 출제</li>*/}
                        {/*        <li>- 오답 제출시 Spring AI를 사용해 임배딩하여 정답과의 유사도를 측정해 제공</li>*/}
                        {/*        <li>- 인물 정면 사진을 LivePortrait 모델을 활용해 입모양 문제 영상 생성</li>*/}
                        {/*    </ul>*/}
                        {/*</li>*/}
                        <li>
                            <h2>랭킹 구현</h2>
                            <ul>
                                <li>- 점수를 소수점 대신 정수(×100)로 변환해 저장하여, DB에서 정렬 및 비교 성능을 향상시켜 대량 데이터에서도 안정적 조회 가능</li>
                                <li>- QueryDSL 기반 동적 쿼리로 집계 로직을 개선하여, 실시간 랭킹 조회 시에도 응답 속도와 성능 안정성을 확보</li>
                                <li>- 메인 페이지에서 게임(카테고리)별 Top10과 로그인 사용자의 개인 랭킹을 함께 보여주도록 요구사항을 재정의하고, 기존 단순 정렬 코드를 전면
                                    리팩토링하여 UX 향상
                                </li>
                                <li>- 담당 인원 부재 상황에서 팀장으로서 설계를 주도하고, Spring Data JPA + QueryDSL을 활용해 재구현함으로써 개발 공백을 메우고
                                    유지보수성을 강화
                                </li>
                            </ul>
                        </li>
                        {/*<li>*/}
                        {/*    <h2>랭킹 구현 </h2>*/}
                        {/*    <ul>*/}
                        {/*        <li>- 점수를 소수점 대신 정수(×100)로 변환해 저장하여 DB 정렬·비교 성능 최적화</li>*/}
                        {/*        <li>- QueryDSL 기반 동적 쿼리로 집계 로직을 개선해 대량 데이터 실시간 조회 시 안정적인 응답 속도 확보</li>*/}
                        {/*        <li>- 메인 페이지에서 게임(카테고리)별 Top10과 로그인 사용자의 개인 랭킹을 함께 노출하도록 요구사항을 재정의하고, 기존 단순 정렬 코드를 전면*/}
                        {/*            리펙토링*/}
                        {/*        </li>*/}
                        {/*        <li>- 담당 인원 부재 상황에서 팀장으로서 설계 주도 및 Spring Data JPA + QueryDSL을 활용한 재구현 수행</li>*/}
                        {/*    </ul>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </div>
        </section>
        // <section id="section_3">
        //     <div className="flex wrap">
        //         <div className="title flex wrap w100">
        //             <div>
        //                 <h1>Project 제목 1 [ex:소리손순]</h1>
        //                 <span className="pointStrong">프로젝트 간략 설명 쏼롸쏼롸</span>
        //             </div>
        //             <div className="side_info">
        //                 <p>팀 구성: N명</p>
        //                 <p>역할 : 팀원 or 팀장</p>
        //                 <span>(oo기능 구현 담당)</span>
        //             </div>
        //         </div>
        //         <div className="project">
        //             <ul>
        //                 <li>
        //                     <h2>내가 맡아서 한일 한줄똬! </h2>
        //                     <ul>
        //                     <li>- 한줄에 대한 설명똬!</li>
        //                         <li>- 한줄에 대한 설명똬!</li>
        //                         <li>- 한줄에 대한 설명똬!</li>
        //                         <li>- 한줄에 대한 설명똬!</li>
        //                     </ul>
        //                 </li>
        //                 <li>
        //                     <h2>내가 맡아서 한일 한줄똬! </h2>
        //                     <ul>
        //                         <li>- 한줄에 대한 설명똬!</li>
        //                         <li>- 한줄에 대한 설명똬!</li>
        //                         <li>- 한줄에 대한 설명똬!</li>
        //                         <li>- 한줄에 대한 설명똬!</li>
        //                     </ul>
        //                 </li>
        //                 <li>
        //                     <h2>내가 맡아서 한일 한줄똬! </h2>
        //                     <ul>
        //                         <li>- 한줄에 대한 설명똬!</li>
        //                         <li>- 한줄에 대한 설명똬!</li>
        //                         <li>- 한줄에 대한 설명똬!</li>
        //                         <li>- 한줄에 대한 설명똬!</li>
        //                     </ul>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </section>
    );
}

export default Section_3;