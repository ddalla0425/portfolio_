import {Github} from "react-bootstrap-icons";
import React from "react";

function Section_6(){
    return(
        <section id="section_6">
            <div className="flex wrap">
                <div className="title flex wrap w100">
                    <div>
                        <h1>[프론트] 야놀자리서치
                            <ul className="link_icon">
                                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/ddalla0425/yanoljaResearch-front"><Github/></a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://yanolja-research-front.vercel.app/">Vercel 확인</a></li>
                            </ul>
                        </h1>
                        <span className="pointStrong">야놀자 리서치 메인 페이지 카드 슬라이더 UI를 Swiper로 재현하고 개선한 <strong>클론 프로젝트</strong>입니다.</span>
                    </div>
                    <div className="side_info">
                        <p>단독 프로젝트</p>
                        <span>25.11.20 ~ 25.12.04</span>
                    </div>
                </div>
                <div className="project">
                    <dl className="stack">
                        <dt>프론트엔드</dt>
                        <dd>Next.js, React, JavaScript, Swiper</dd>
                    </dl>
                    <dl>
                        <dt>백엔드</dt>
                        <dd>정적 데이터(JSON) 기반 다국어 콘텐츠 구성</dd>
                    </dl>
                    <dl>
                        <dt>배포</dt>
                        <dd>Vercel</dd>
                    </dl>
                    <dl>
                        <dt>도구</dt>
                        <dd>Github</dd>
                    </dl>
                    <ul>
                        <li>
                            <h2>Insights 스택형 카드 슬라이더 구현</h2>
                            <ul>
                                <li>- Swiper cardsEffect 기반으로 항상 3장만 노출되는 스택 UI를 커스텀 구현(active → next1 → next2)</li>
                                <li>- loop 환경에서 인덱스 점프/순서 꼬임 문제를 고려해, transform은 Swiper에 맡기고 opacity 제어로 노출 카드만 관리하는 ‘부분
                                    커스텀 전략’으로 안정화
                                </li>
                                <li>- autoplay + prev/next + pagination 동작을 프로젝트 요구에 맞게 직접 제어하여 원본과 유사한 인터랙션 구현</li>
                                <li>- <a target="_blank" rel="noopener noreferrer" href="https://ddalla0425.notion.site/?p=2c327e1365db80279b77d8334e872365&pm=s">해당 트러블 슈팅 보러가기</a></li>
                            </ul>
                        </li>
                        <li>
                            <h2>다국어 지원 구조 설계</h2>
                            <ul>
                                <li>- LanguageProvider로 전역 언어 상태 관리</li>
                                <li>- contents[lang] 기반 데이터 분리 + filterByCategory 유틸로 섹션별 콘텐츠 필터링</li>
                                <li>- 언어 변경 시 새로고침 없이 즉시 UI 반영되는 구조로 구성</li>
                            </ul>
                        </li>
                        <li>
                            <h2>원본 대비 UI/반응형 개선</h2>
                            <ul>
                                <li>- 화면 축소 시 스택 해제로 발생하던 shadow/레이아웃 잘림 문제를 보완하여 반응형에서도 스택 품질 유지
                                    <table border="ellipsis">
                                        <thead>
                                            <tr>
                                                <th>Before</th>
                                                <th>After</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><img alt="원본페이지 잘못된 슬라이드 예시 이미지"
                                                    src="/images/readme/original_slide.gif"/>
                                                </td>
                                                <td><img alt="클론페이지 수정된 슬라이드 예시 이미지"
                                                    src="/images/readme/clone_slide.gif"/>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </li>
                                <li>- 리사이즈 시 특정 슬라이드가 튀는 현상을 UI 조정으로 개선
                                    <table border="ellipsis">
                                        <thead>
                                            <tr>
                                                <th>Before</th>
                                                <th>After</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><img alt="원본페이지 리사이즈시 특정 슬라이드가 튀는 잘못된 예시 이미지"
                                                    src="/images/readme/original_resize.gif"/>
                                                </td>
                                                <td><img alt="클론페이지 리사이즈시 수정된 슬라이드 예시 이미지"
                                                    src="/images/readme/clone_resize.gif"/>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </li>
                                <li>- Press 텍스트 라인 처리(ellipsis) 규칙을 개선해 가독성 향상
                                    <table border="ellipsis">
                                        <thead>
                                            <tr>
                                                <th>Before</th>
                                                <th>After</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><img alt="원본페이지 모바일 ui 잘못된 예시 이미지"
                                                    src="/images/readme/original_mobile_ui.png"/>
                                                </td>
                                                <td valign="top"><img alt="클론페이지 모바일 ui 수정된 예시 이미지"
                                                    src="/images/readme/clone_mobile_ui.png"/>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h2>배포 트러블슈팅</h2>
                            <ul>
                                <li>- Vercel 배포 중 App Router 환경에서 useSearchParams 사용으로 발생한 프리렌더링 이슈를 구조 개선으로 해결하고,
                                    Next.js 보안 취약점 대응을 위해 npx fix-react2shell-next로 버전 업데이트 후 배포 성공
                                </li>
                                <li>- <a target="_blank" rel="noopener noreferrer"
                                    href="https://ddalla0425.notion.site/?p=2cb27e1365db802db0abd4721df3c452&pm=s">해당
                                    트러블 슈팅 보러가기</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Section_6;