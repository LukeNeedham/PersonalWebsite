import { useClickable } from "@chakra-ui/clickable"
import { chakra } from "@chakra-ui/react"

export const Clickable = (props) => {
  const clickable = useClickable(props)
  return <chakra.div cursor='pointer' display="inline-flex" {...clickable} />
}