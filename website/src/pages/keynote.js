import React from 'react'
import Link from 'gatsby-link'

import Speaker from "../components/Speaker/Speaker"

import Henrique_Malvar from "../images/Henrique_Malvar.jpg"
import Jeng_Neng_Hwang from "../images/Jeng_Neng_Hwang.jpg"
import Gordon_Durity from "../images/Gordon_Durity.jpg"

const KeynotePage = () => (
  <div>
  <h3>Keynote Speakers</h3>
  <Speaker
    speaker_name="Gordon Durity"
    speaker_title="Executive Audio Director, Electronic Arts"
    avatar= {Gordon_Durity}
    speaker_desc="Gordon Durity has over 30 years experience in creating soundtracks, writing songs and producing audio in the areas of film, television, games, multimedia, and album production. He currently serves as an Executive Audio Director at Electronic Arts, one of the largest developers of video games in the world. There Gordon designs and supervises the creation and implementation of audio for various titles, works with technical staff to develop new cutting edge technologies, sits on game design groups, and supervises audio at various EA Studios locations worldwide. Gordon currently serves as a consultant to educational institutions, film and music industries on how best to maximize opportunities in the exploding games and multimedia industries. He has also been a guest lecturer at Simon Fraser University, University of British Columbia and Emily Carr University of the Arts.  As a composer, Gordon has written scores for feature and short films, television, radio, dance, theatre, runway shows and games. Gordon has produced and written with many international artists and has had songs charted all over the world. He has worked for USA Network, Fox, Disney, Paramount, CBC, BBC, Trimark, NFB, PBS, ABC, and many independents. Gordon’s current research focus is on audio and experience design and implementation for virtual environments for Virtual Reality/Augmented Reality, and machine learning-based speech synthesis."
  />
  <h4>Keynote Title: Giving Creatives Bigger Levers</h4>
  <h4>Abstract:</h4>
  <p>We are in a place in the interactive entertainment industries where content is king. Games and apps are no longer single delivered products, but are becoming more like an OS by which an ongoing stream of content can be delivered to the consumer. We are also dealing with multiple platforms from mobile devices to traditional consoles to VR/AR rigs. As content producers we are researching, applying and integrating machine learning, AI, and procedural/generative systems into our development processes to amplify the capabilities of the modern day “cyber-artist”. This presentation will explore and examine some of the thinking and work we are doing at Electronic Arts in these areas, and specifically in the realm of audio.
  </p>

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
