export default function TabBar({ $app, initialSate, onClick }) {
  this.state = initialSate;  // 초기 상태 설정
  this.onClick = onClick;    // ✅ 올바르게 저장

  this.$target = document.createElement('div');
  this.$target.className = 'tab-bar';
  $app.appendChild(this.$target);

  this.template = () => {
    return `
      <div id="all">전체</div>
      <div id="penguin">펭귄</div>
      <div id="koala">코알라</div>
      <div id="panda">판다</div>
    `;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();

    // 현재 탭 강조
    const $currentTab = document.getElementById(this.state);
    if ($currentTab) $currentTab.classList.add('clicked');

    // 클릭 이벤트 바인딩
    const $tabItems = this.$target.querySelectorAll('div');
    $tabItems.forEach((elm) => {
      elm.addEventListener('click', () => {
        this.onClick(elm.id);        // ✅ this.onClick 사용
      });
    });
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();  // 초기 렌더링
}
