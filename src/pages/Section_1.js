import {Github} from "react-bootstrap-icons";

function Section_1(){
    return(
        <section id="section_1">
            <div className="flex wrap">
                <div className="person">
                    <img src="/images/증명사진.png" alt="증명사진"/>
                    <h1>김다솔</h1>
                    <p>Growth Recorder</p>
                    <ul className="link_icon">
                        <li><a href="https://github.com/ddalla0425" target="_blank"><Github/></a></li>
                        <li><a href="https://grizzly-wallet-e17.notion.site/615ece80257444069ce0105ef0958837"
                               target="_blank"><img src="/images/Shape.png"/></a></li>
                        <li></li>
                    </ul>
                </div>
                <div className="competency">
                    <ul className="flex wrap">
                        <li>
                            <h2>교육</h2>
                            <p>AI-X 프로젝트 부트캠프<br/>딥러닝과 생성 모델 활용한 AI 프로젝트 수행</p>
                            <span>2024.07.04 ~ 2024.08.28 [완료] </span>
                            <p>자바 웹개발자 과정<br/>React, SpringBoot, AWS 웹 개발 교육 수료</p>
                            <span>2023.12.27 ~ 2024.06.19 [완료]</span>
                            <p>스마트기기 UI/UX디자인 과정 완료<br/> UI/UX 디자인 실습 중심 교육 수료</p>
                            <span>2017.03.14 ~ 2017.09.15 [완료]</span>
                        </li>
                        <li>
                            <h2>경력</h2>
                            <p>아라커뮤니케이션<br/>HTML,CSS, Javascript, JQuery 를 사용하여 퍼블리싱 업무를 담당</p>
                            <span>2018.07 - 2020.08 ⎮ 웹퍼블리셔[대리]</span>
                        </li>
                        <li>
                            <h2>학력</h2>
                            <p>성덕 여자 상업 고등학교<br/>디지털 정보처리과</p>
                            <span>2008.03 - 2011.02 ⎮ 졸업</span>
                        </li>
                        <li>
                            <h2>자격증</h2>
                            <ul>
                                <li>•<strong>2012.04</strong><span>2종 보통 운전면허증</span></li>
                                <li>•<strong>2017.05</strong><span>GTQ 포토샵 1급</span></li>
                                <li>•<strong>2010.06</strong><span>컴퓨터활용능력 3급</span></li>
                                <li>•<strong>2022.03</strong><span>굴착기운전기능사</span></li>
                                <li>•<strong>2022.03</strong><span>지게차운전기능사</span></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="introduction w100">
                    <h2>자기소개</h2>
                    <strong className="pointStrong">"저는 문제를 기록하고 해결하며 성장하는 개발자 김다솔입니다."</strong>
                    <p>
                    새로운 기술과 도구를 배우고 적용하는 과정에서 발생하는 <strong>문제를 빠르게 분석하고 체계적으로 기록</strong>하며, 해결 과정을 정리해 다시는 같은 문제로
                        막히지 않도록 지식을 쌓아갑니다.<br/>
                        팀 프로젝트에서는 <strong>자유롭게 의견을 주고받고 서로의 아이디어를 존중하는 분위기</strong>를 만들며, 협업 속에서 다양한 관점을 배우고 <strong>서로의
                        접근 방식을 이해하는 과정을 통해 배움의 기회</strong>를 넓혔습니다.<br/>
                        또한 모르는 부분이 있으면 직접 <strong>자료를 조사해 정리하고 팀원들과 공유</strong>하며 함께 이해를 높이는 데 기여했습니다.<br/>
                        이러한 경험은 저를 단순히 주어진 일을 처리하는 개발자가 아닌, <strong>지식을 나누고 함께 성장하는 개발자</strong>로 나아가게 한 밑거름이 되었습니다.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Section_1;