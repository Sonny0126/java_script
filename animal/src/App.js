import TabBar from './components/TabBar.js';
import Content from './components/Content.js';
import { request } from './components/api.js';

export default function App($app) {
  this.state = {
    currentTab: 'all',
    photos: [],
  };

  const tabBar = new TabBar({
    $app,
    initialState: 'all',
    onClick: async (name) => {
      this.setState({
        ...this.state,
        currentTab: name,
        photos: await request(name),
      });
    },
  });

  const content = new Content({ $app });

  this.setState = (newState) => {
    this.state = newState;
    tabBar.setState(this.state.currentTab); // ❗ 수정: tabBar.this ❌
    content.setState(this.state.photos);
  };

  const init = async () => {
    try {
      const initialPhotos = await request();
      this.setState({
        ...this.state,
        photos: initialPhotos,
      });
    } catch (err) {
      console.log(err);
    }
  };

  init(); // 초기화 함수 호출 추가도 잊지 마세요!
}
