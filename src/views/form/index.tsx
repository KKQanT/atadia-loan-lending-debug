import { FC } from 'react'
import { SubmitFormTest } from 'components/SubmitFormTest';
import { DiscordUser } from "utils/types";

interface Props {
  user: DiscordUser;
}

export const FormView: FC<Props> = (props:Props) => {
  const { user } = props
  return (
    <div>
      <h1>Form</h1>
      <SubmitFormTest user={user}/>
    </div>
  )
};