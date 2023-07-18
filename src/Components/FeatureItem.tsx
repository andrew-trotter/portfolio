interface Props {
  name: string
}

function FeatureItem({name}: Props) {
  return(
    <div className="inline-flex border-0 bg-fuchsia-500 bg-opacity-10 mx-1 my-1 py-0.5 px-2 rounded-full ">
      <div className="text-fuchsia-500">{name}</div>
      </div>
  )
}

export default FeatureItem