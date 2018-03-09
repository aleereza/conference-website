import React from 'react'
import Link from 'gatsby-link'

import Speaker from "../components/Speaker/Speaker"

import Henrique_Malvar from "../images/Henrique_Malvar.jpg"
import Jeng_Neng_Hwang from "../images/Jeng_Neng_Hwang.jpg"

const KeynotePage = () => (
  <div>
  <Speaker
    speaker_name="Jenq-Neng Hwang"
    speaker_title="Professor and Associate Chair, Department of Electrical Engineering, University of Washington"
    avatar= {Jeng_Neng_Hwang}
    speaker_desc="Dr. Jenq-Neng Hwang received the BS and MS degrees, both in electrical engineering from the National Taiwan University, Taipei, Taiwan, in 1981 and 1983 separately. He then received his Ph.D. degree from the University of Southern California. In the summer of 1989, Dr. Hwang joined the Department of Electrical Engineering of the University of Washington in Seattle, where he has been promoted to Full Professor since 1999. He served as the Associate Chair for Research from 2003 to 2005, and from 2011-2015. He is currently the Associate Chair for Global Affairs and International Development in the EE Department. He has written more than 330 journal, conference papers and book chapters in the areas of multimedia signal processing, and multimedia system integration and networking, including an authored textbook on 'Multimedia Networking: from Theory to Practice', published by Cambridge University Press. Dr. Hwang has close working relationship with the industry on multimedia signal processing and multimedia networking. Dr. Hwang received the 1995 IEEE Signal Processing Society's Best Journal Paper Award. He is a founding member of Multimedia Signal Processing Technical Committee of IEEE Signal Processing Society and was the Society's representative to IEEE Neural Network Council from 1996 to 2000. He is currently a member of Multimedia Technical Committee (MMTC) of IEEE Communication Society and also a member of Multimedia Signal Processing Technical Committee (MMSP TC) of IEEE Signal Processing Society. He served as associate editors for IEEE T-SP, T-NN and T-CSVT, T-IP and Signal Processing Magazine (SPM). He is currently on the editorial board of ZTE Communications, ETRI, IJDMB and JSPS journals. He served as the Program Co-Chair of IEEE ICME 2016 and was the Program Co-Chairs of ICASSP 1998 and ISCAS 2009. Dr. Hwang is a fellow of IEEE since 2001."
  />

  <Speaker
    speaker_name="Henrique Malvar"
    speaker_title="Chief Scientist, Microsoft Research"
    avatar= {Henrique_Malvar}
    speaker_desc="Henrique (Rico) Malvar is a Microsoft Distinguished Engineer and the Chief Scientist for Microsoft Research. He currently leads a new team at MSR developing technologies for people with disabilities. He joined Microsoft Research in 1997, founding the signal processing group, which developed new technologies such as new media compression formats used in Windows, Xbox, and Office, and microphone array processing technologies used in Windows, Xbox Kinect, and HoloLens. Rico was a key architect for the media compression formats WMA and JPEG XR and made key contributions to the H.264 video format, used by most Web video services. Rico received a PhD from MIT in 1986 and is a Member of the US National Academy of Engineering. He has over 120 issued US patents and over 160 publications. He is an IEEE Fellow and has received many awards, including the Technical Achievement Award from the IEEE Signal Processing Society in 2002."
  />

  </div>
)

export default KeynotePage
