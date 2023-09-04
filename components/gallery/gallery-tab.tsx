import Image from "next/image";
import { Tab } from "@headlessui/react";

import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";

interface GalleryTabProps {
    image: ImageType
};

const GalleryTab: React.FC<GalleryTabProps> = ({
    image
}) => {
    return ( 
        <Tab>
             
       </Tab>
     );
}
 
export default GalleryTab;