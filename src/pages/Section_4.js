function Section_4(){
    return(
        <section id="section_4">
            <div className="flex wrap">
                <div className="title flex wrap w100">
                    <div>
                        <h1>티슈인맥</h1>
                        <span className="pointStrong">넓고 얕은 관계를 지향하는 <strong>SNS형 개인 블로그</strong> 플랫폼 서비스</span>
                    </div>
                    <div className="side_info">
                        <p>팀 구성: 5명</p>
                        <p>역할 : 팀원</p>
                        <span>24.03.20 ~ 24.04.12</span>
                    </div>
                </div>
                <div className="project">
                    <dl className="stack">
                        <dt>프론트엔드</dt>
                        <dd>JavaScript, HTML5, CSS3, Thymeleaf</dd>
                    </dl>
                    <dl>
                        <dt>백엔드</dt>
                        <dd>Java, Spring Boot, MyBatis, MySQL</dd>
                    </dl>
                    <dl>
                        <dt>도구</dt>
                        <dd>Github, Figma, Notion</dd>
                    </dl>
                    <ul>
                        <li>
                            <h2>프로젝트 리딩 및 일정 관리 </h2>
                            <ul>
                                <li>- 다양한 의견을 조율하여 팀의 의사결정을 지원함</li>
                                <li>- Figma를 통한 UI 디자인의 100%를 담당</li>
                                <li>- 요구사항 분석과 단위 업무 정의서, 흐름도를 작성하고 ERD 설계를 주도</li>
                                <li>- 매일 아침 코드 리뷰 및 진행 상황 공유 회의와 회고 미팅을 주도하여 팀의 진행 상황 점검과 개선점 도출</li>
                            </ul>
                        </li>
                        <li>
                            <h2>포스팅 기능 구현 (이미지 업로드 포함)</h2>
                            <ul>
                                <li>- 게시글 등록/수정/삭제 기능을 트랜잭션으로 관리하여 첨부 이미지와 태그 등 관련 데이터 일괄 처리, 오류 발생 시 자동 롤백으로 데이터 무결성 확보</li>
                                <li>- FormData 기반 글쓰기 처리 및 필수 항목 검증을 구현하여, 클라이언트와 서버 간 데이터 전송 과정에서 발생 가능한 오류 방지</li>
                                <li>- 게시글 조회 시 존재하지 않거나 권한 없는 게시글을 구분해 세분화된 상태 코드와 메시지를 제공, 사용자 경험과 디버깅 편의성 향상</li>
                                <li>- 에디터와 연계하여 실시간 입력 처리, 태그 추출, 글자 크기/포맷 적용 기능을 구현, 편리하고 직관적인 글쓰기 환경 제공</li>
                                <li>- 이미지 업로드 및 처리 로직을 통합하여 유지보수성과 재사용성 강화</li>
                                <li>- DTO 및 Mapper 활용으로 데이터 처리 흐름을 표준화 하고, 코드 가독성 및 확장성 확보</li>
                                <li>- UI 상태 연계 로직(로딩, 페이징, 보기 방식 전환 등)을 구현하여 사용자 경험의 일관성과 편리성 확보</li>
                                <li>- 무한 스크롤 기능 구현으로 게시글 리스트를 페이지 단위가 아니라 스크롤 시점에 따라 동적 로딩, 서버 부담 최소화 및 사용자의 자연스러운 콘텐츠 탐색 경험 제공</li>
                            </ul>
                        </li>
                        <li>
                            <h2>폴더(카테고리) 관리 기능 구현</h2>
                            <ul>
                                <li>- 게시글 폴더(카테고리) 생성/수정/삭제 기능을 트랜잭션 기반으로 구현하여 관련 게시글과의 연계 무결성 보장</li>
                                <li>- 잘못된 폴더 ID 등 예외 상황 처리 및 세분화된 상태 코드 제공</li>
                                <li>- 폴더 단위 조회 및 관리 로직을 공통 데이터 처리 구조와 통합하여 코드 중복 최소화 및 유지보수성 향상</li>
                            </ul>
                        </li>
                        <li>
                            <h2>공통 데이터 관리 및 유지보수성 개선</h2>
                            <ul>
                                <li>- 게시글과 폴더 기능에서 공통으로 사용하는 데이터 처리 구조를 통합하여 코드 중복 최소화</li>
                                <li>- DTO, Mapper, 유틸 클래스 등을 활용하여 재사용성과 확장성 확보</li>
                                <li>- 예외 처리 및 트랜잭션 관리 전략을 통일하여 안정적인 서비스 운영 지원</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Section_4;