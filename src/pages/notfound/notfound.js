
import AudioPlayer from '../../component/audioplayer/audioplayer';
import CenterBlockNF from '../../component/centerblockNF/center-block-nf';
import NavMenuNF from '../../component/mainsidebarNf/mainsidebarnf';
import SideBarNF from '../../component/mainnavNf/main-navNf';
import * as S from '../../App.style'

export default function NotFoundPage() {
    
    return (
<S.Wrapper>
    <S.Container>
    <S.Main>
        <NavMenuNF />
        <CenterBlockNF/>
        <SideBarNF/>
    </S.Main>
    <AudioPlayer unvisible/>
    <footer />
    </S.Container>
  </S.Wrapper>
    ) 
}