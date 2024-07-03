import Image from 'next/image'
import naker from "../public/img-take.png";

export default function Page() {
    return (
        <Image
            src={naker}
            layout="responsive"
            width="100%"
            // height={9124}
            // alt="Picture of the author"
        />
    )
}
