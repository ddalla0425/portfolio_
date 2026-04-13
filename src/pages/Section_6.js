import { Github } from "react-bootstrap-icons";
import React from "react";

export function Section6() {
  const [accordion1, setAccordion1] = React.useState(false);
  const [accordion2, setAccordion2] = React.useState(false);
  const [accordion3, setAccordion3] = React.useState(false);
  return (
    <section id="section_6">
      <div className="flex wrap">
        <div className="title flex wrap w100">
          <div>
            <h1>
              [프론트] 야놀자리서치
              <ul className="link_icon">
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/ddalla0425/yanoljaResearch-front"
                  >
                    <Github />
                  </a>
                </li>
                <li className="vercel">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://yanolja-research-front.vercel.app/"
                  >
                    <img src="/images/icon/vercel.png" alt="Vercel 아이콘" />
                  </a>
                </li>
              </ul>
            </h1>
            <span className="pointStrong">
              야놀자 리서치 메인 페이지 카드 슬라이더 UI를 Swiper로 재현하고
              개선한 <strong>클론 프로젝트</strong>
            </span>
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

          <ul className="details">
            <li>
              <h2>
                <strong className="point">UI/UX 엔지니어링</strong> 한계를
                극복한 스택형 카드 슬라이더 커스텀 구현
              </h2>
              <ul>
                <li>
                  - <strong>문제:</strong> Swiper의 기본 제공 기능만으로는 '항상
                  3장만 노출되는 스택 UI'라는 디자인 요구사항과 무한 루프(Loop)
                  환경에서의 인덱스 꼬임 문제를 해결하기 어려움
                </li>
                <li>
                  - <strong>해결 및 성과:</strong> Swiper의 하드웨어
                  가속(Transform)은 유지하되, Opacity 제어로 노출 카드만 직접
                  관리하는 <strong>‘부분 커스텀 전략’</strong>을 도입. Autoplay,
                  Pagination 동작을 요구사항에 맞게 직접 제어하여 원본과 동일한
                  인터랙션의 커스텀 슬라이더 안정화
                </li>
              </ul>
            </li>
            <li>
              <h2>
                <strong className="point">상태 관리 & 아키텍처</strong> 전역
                상태를 활용한 다국어(i18n) 지원 구조 설계
              </h2>
              <ul>
                <li>
                  - <strong>설계 및 성과:</strong> <code>LanguageProvider</code>
                  를 구축하여 전역 언어 상태를 관리하고, 정적 데이터(JSON)를{" "}
                  <code>contents[lang]</code> 기반으로 분리. 유틸리티 함수(
                  <code>filterByCategory</code>)를 결합하여{" "}
                  <strong>언어 변경 시 새로고침 없이 즉시 UI가 렌더링</strong>
                  되는 최적화된 다국어 아키텍처 구축
                </li>
              </ul>
            </li>
            <li>
              <h2>
                <strong className="point">트러블슈팅 & 반응형</strong> 원본
                사이트의 UI 오류 분석 및 자체 개선
              </h2>
              <ul>
                <li>
                  - <strong>개선 성과:</strong> 클론 코딩에 머물지 않고 원본
                  사이트의 문제점(화면 축소 시 레이아웃 잘림, 리사이즈 시
                  슬라이드 튐 현상, 모바일 가독성 저하)을 주도적으로 분석하고
                  보완하여 <strong>원본보다 안정적인 반응형 UX</strong> 제공
                  <div className="w100">
                    <button
                      className="compareBtn btn"
                      onClick={() => setAccordion1(!accordion1)}
                    >
                      스택 해제 현상 전후 확인
                    </button>
                    {accordion1 && (
                      <table border="ellipsis">
                        <thead>
                          <tr>
                            <th>Before (원본)</th>
                            <th>After (개선)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                alt="원본페이지 잘못된 슬라이드 예시 이미지"
                                src="/images/readme/original_slide.gif"
                              />
                            </td>
                            <td>
                              <img
                                alt="클론페이지 수정된 슬라이드 예시 이미지"
                                src="/images/readme/clone_slide.gif"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    )}
                    <button
                      className="compareBtn btn"
                      onClick={() => setAccordion2(!accordion2)}
                    >
                      리사이즈 튐 현상 전후 확인
                    </button>
                    {accordion2 && (
                      <table border="ellipsis">
                        <thead>
                          <tr>
                            <th>Before (원본)</th>
                            <th>After (개선)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                alt="원본페이지 리사이즈시 특정 슬라이드가 튀는 잘못된 예시 이미지"
                                src="/images/readme/original_resize.gif"
                              />
                            </td>
                            <td>
                              <img
                                alt="클론페이지 리사이즈시 수정된 슬라이드 예시 이미지"
                                src="/images/readme/clone_resize.gif"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    )}
                    <button
                      className="compareBtn btn"
                      onClick={() => setAccordion3(!accordion3)}
                    >
                      모바일 가독성 전후 확인
                    </button>
                    {accordion3 && (
                      <table border="ellipsis">
                        <thead>
                          <tr>
                            <th>Before</th>
                            <th>After</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                alt="원본페이지 모바일 ui 잘못된 예시 이미지"
                                src="/images/readme/original_mobile_ui.png"
                              />
                            </td>
                            <td valign="top">
                              <img
                                alt="클론페이지 모바일 ui 수정된 예시 이미지"
                                src="/images/readme/clone_mobile_ui.png"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    )}
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <h2>
                <strong className="point">DevOps</strong> Next.js App Router
                프리렌더링 및 배포 이슈 해결
              </h2>
              <ul>
                <li>
                  - <strong>문제 및 해결:</strong> Vercel 배포 과정 중 App
                  Router 환경의 <code>useSearchParams</code>로 인해 발생한
                  프리렌더링 빌드 에러를 구조 개선으로 해결. Next.js 보안 취약점
                  업데이트(fix-react2shell-next)를 수행하여 성공적인 CI/CD
                  파이프라인 구축
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
