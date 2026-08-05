import React from 'react'
import TrihutTech from "../../pages/Public/TrihutTech";
import EnterpriseSection from "../../pages/Public/EnterpriseSection";
import ClientSatisfied from "../../pages/Public/ClientSatisfied";
import Testmonials from "../../pages/Public/Testmonial";
import WorkingProcess from "../../pages/Public/WorkingProcess";
import WhyChoose from "../../pages/Public/WhyChoose";

import Technologies from '../../pages/Public/technologies';
import ReadyToTransform from "../../pages/Public/ReadyToTransform";

const MainPagesLayout = () => {
  return (
   <>
   <TrihutTech />
   <EnterpriseSection />
   <ClientSatisfied />
   <Testmonials />

   <WorkingProcess />
   <WhyChoose />

   <Technologies />
   <ReadyToTransform />
   </>
  )
}

export default MainPagesLayout
