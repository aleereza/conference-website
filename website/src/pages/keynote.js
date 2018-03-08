import React from 'react'
import Link from 'gatsby-link'

import Speaker from "../components/Speaker/Speaker"

const KeynotePage = () => (
  <div>
  <Speaker
    speaker_name="Henrique Malvar"
    speaker_title="Chief Scientist, Microsoft Research"
    avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
    speaker_desc="Henrique (Rico) Malvar is a Microsoft Distinguished Engineer and the Chief Scientist for Microsoft Research. He currently leads a new team at MSR developing technologies for people with disabilities. He joined Microsoft Research in 1997, founding the signal processing group, which developed new technologies such as new media compression formats used in Windows, Xbox, and Office, and microphone array processing technologies used in Windows, Xbox Kinect, and HoloLens. Rico was a key architect for the media compression formats WMA and JPEG XR and made key contributions to the H.264 video format, used by most Web video services. Rico received a PhD from MIT in 1986 and is a Member of the US National Academy of Engineering. He has over 120 issued US patents and over 160 publications. He is an IEEE Fellow and has received many awards, including the Technical Achievement Award from the IEEE Signal Processing Society in 2002."
  />
  </div>
)

export default KeynotePage
