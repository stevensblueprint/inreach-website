import type { Page } from "~tina/__generated__/types";
import { TakeActionContainer } from "./blocks/TakeAction";

export const Blocks = (props: Omit<Page, 'id' | '_sys' | '_values'>) => {
  return (
    <>
      {props.blocks 
        ? props.blocks.map((block, i: number) => {
          switch (block?.__typename) {
            case 'PageBlocksActions':
              return (
                <div key={i + block.__typename}>
                  <TakeActionContainer data={block} />
                </div>
              )
          }
        })
      : null}
    </>
  )
}