import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom'

import Tasks from './Tasks'

interface MypageProps extends RouteComponentProps<{}> {

}

const Mypage = (props: MypageProps) => {
  return (
    <div>
      <div>
        this is Mypage
      </div>
      <Tasks/>
    </div>

  )
}

export default Mypage;