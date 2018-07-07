import React from 'react'
import Link from 'gatsby-link'

import styles from "../components/components.module.css"
import ScheduleRow from "../components/Row/ScheduleRow"
import PaperRow from "../components/Row/PaperRow"

import SpeakerKeynote from "../components/Speaker/SpeakerKeynote"

import Henrique_Malvar from "../images/Henrique_Malvar.jpg"
import Jeng_Neng_Hwang from "../images/Jeng_Neng_Hwang.jpg"
import Gordon_Durity from "../images/Gordon_Durity.jpg"

import TechnicalProgram from "../files/MMSP2018_Technical_Program_tentative.pdf"

const TechnicalPage = () => (
  <div>
    <h3>Technical Program</h3>


    <div style={{overflowX:"auto"}}>
      <table>
        <tbody>
          <tr>
            <th width="13%"></th>
            <th width="29%" className={styles.schedule_headrow}><p>Wednesday</p><p>August 29, 2018</p></th>
            <th width="29%" className={styles.schedule_headrow}><p>Thursday</p><p>August 30, 2018</p></th>
            <th width="29%" className={styles.schedule_headrow}><p>Friday</p><p>August 31, 2018</p></th>
          </tr>
          <ScheduleRow
            time="08:45am 09:00am"
            day1="Opening"
            day2=""
            day3=""
          />
          <ScheduleRow
            time="09:00am 10:00am"
            day1="Keynote 1"
            day2="Keynote 2"
            day3="Keynote 3"
            cellcolor="#ffe6f9"
          />
          <ScheduleRow
            time="10:00am 10:20am"
            day1="Break with refreshments"
            day2="Break with refreshments"
            day3="Break with refreshments"
          />
          <ScheduleRow
            time="10:20am 12:10pm"
            day1="Special Session SS.W1"
            day2="Special Session SS.T1"
            day3="Special Session SS.F1"
            cellcolor="#e6f2ff"
          />
          <ScheduleRow
            time="12:10pm 01:30pm"
            day1="Lunch"
            day2="Lunch, MMSP TC meeting"
            day3="Lunch"
          />
          <ScheduleRow
            time="01:30pm 02:30pm"
            day1="Poster Session PS.W1"
            day2="Poster Session PS.T1"
            day3="Poster Session PS.F1"
            cellcolor="#ffd9b3"
          />
          <ScheduleRow
            time="02:30pm 02:50pm"
            day1="Break with refreshments"
            day2="Break with refreshments"
            day3="Break with refreshments"
          />
          <ScheduleRow
            time="02:50pm 04:20pm"
            day1="Lecture Session LS.W1"
            day2="Lecture Session LS.T1"
            day3="Lecture Session LS.F1"
            cellcolor="#c2f0c2"
          />
          <ScheduleRow
            time="04:20pm 04:30pm"
            day1="Break with refreshments"
            day2="Break with refreshments"
            day3="Closing"
          />
          <ScheduleRow
            time="04:30pm 06:00pm"
            day1="Lecture Session LS.W2"
            day2="Lecture Session LS.T2"
            day3=""
            cellcolor="#c2f0c2"
          />
        </tbody>
      </table>
    </div>
    <a href={TechnicalProgram} download="Technical_Program.pdf"><small>Download in PDF</small></a>

    <h3 style={{backgroundColor: "#cccccc", textAlign: "center", padding: ".5rem"}}>Wednesday, August 29, 2018</h3>
    <h3 className={styles.nomarginb}>Keynote 1</h3>
    <p>Time: 9:00am – 10:00am</p>

    <SpeakerKeynote
      keynote_title="Title: TBD"
      speaker_name="Gordon Durity"
      speaker_title="Executive Audio Director, Electronic Arts"
      avatar= {Gordon_Durity}
      speaker_desc="Gordon Durity has over 30 years experience in creating soundtracks, writing songs and producing audio in the areas of film, television, games, multimedia, and album production. He currently serves as an Executive Audio Director at Electronic Arts, one of the largest developers of video games in the world. There Gordon designs and supervises the creation and implementation of audio for various titles, works with technical staff to develop new cutting edge technologies, sits on game design groups, and supervises audio at various EA Studios locations worldwide. Gordon currently serves as a consultant to educational institutions, film and music industries on how best to maximize opportunities in the exploding games and multimedia industries. He has also been a guest lecturer at Simon Fraser University, University of British Columbia and Emily Carr University of the Arts.  As a composer, Gordon has written scores for feature and short films, television, radio, dance, theatre, runway shows and games. Gordon has produced and written with many international artists and has had songs charted all over the world. He has worked for USA Network, Fox, Disney, Paramount, CBC, BBC, Trimark, NFB, PBS, ABC, and many independents. Gordon’s current research focus is on audio and experience design and implementation for virtual environments for Virtual Reality/Augmented Reality, and machine learning-based speech synthesis."
    />

    <h4 className={styles.nomarginb}>Special Session SS.W1: Spatial Acoustics Using Sensor Arrays: Visions to Implementations</h4>
    <p className={styles.nomarginb}>Session Chair: Rodney G. Vaughan</p>
    <p>Time: 10:20am – 12:10pm</p>

    <table>
      <tbody>
        <tr>
          <th width="5%">ID</th>
          <th width="95%">Title and Authors</th>
        </tr>
        <PaperRow
          id="30"
          title="A Planar Microphone Array for Spatial Coherence-Based Source Separation"
          authors="Abdullah Fahim, Prasanga Samarasinghe, Thushara Abhayapala, and Hanchi Chen (Australian National University)"
        />
        <PaperRow
          id="34"
          title="Sound Environment Reproduction for Health and Safety Studies Using Microphone Arrays, Wave Field Synthesis and the Lasso Minimizer"
          authors="Philippe-Aubert Gauthier and Alain Berry (Université de Sherbrooke)"
        />
        <PaperRow
          id="75"
          title="Speech Intelligibility of Microphone Arrays in Reverberant Environments with Interference"
          authors="Elham Ideli, Rodney G. Vaughan, and Ivan V. Bajić (Simon Fraser University)"
        />
        <PaperRow
          id="85"
          title="Measuring Ear-Canal Reflectance and Estimating Ear-Canal Area Functions and Eardrum Reflectance"
          authors="Hui Deng (Deng Audio Research)"
        />
        <PaperRow
          id="87"
          title="Beamforming with Partial Knowledge of the Acoustic Scenario"
          authors="W. Bastiaan Kleijn (Victoria University of Wellington), Christopher Laguna, Alejandro Luebs, Andrew MacDonald, and Jan Skoglund (Google)"
        />
        <PaperRow
          id="92"
          title="Multiple Source Location Estimation on a Dataset of Real Recordings in a Wireless Acoustic Sensor Network"
          authors="Anastasios Alexandridis (University of Crete), Anthony Griffin (Auckland University of Technology), and Athanasios Mouchtaris (University of Crete)"
        />
      </tbody>
    </table>

    <h4 className={styles.nomarginb}>Poster Session PS.W1: Multimedia Processing and Analysis I</h4>
    <p className={styles.nomarginb}>Session Chair: TBA</p>
    <p>Time: 1:30pm – 2:30pm</p>

    <table>
      <tbody>
        <tr>
          <th width="5%">ID</th>
          <th width="95%">Title and Authors</th>
        </tr>
        <PaperRow
          id="22"
          title="Online Music Performance Tracking Using Parallel Dynamic Time Warping"
          authors="I-Chieh Wei and Li Su (Institute of Information Science, Academia Sinica)"
        />
        <PaperRow
          id="26"
          title="A Hybrid DSP/Deep Learning Approach to Real-Time Full-Band Speech Enhancement"
          authors="Jean-Marc Valin (Mozilla Corporation)"
        />
        <PaperRow
          id="71"
          title="A Sub-Aperture Image Selection Refinement Method for Progressive Light Field Transmission"
          authors="Wallace de Souza, Bruno Macchiavello, Edson Hung, Eduardo Peixoto (University of Brasilia), and Gene Cheung (National Institute of Informatics, Japan)"
        />
        <PaperRow
          id="81"
          title="Robust Polyphonic Sound Event Detection by Using Multi Frame Size Denoising Autoencoder"
          authors="Jianchao Zhou, Xiaoou Chen, and Deshun Yang (Peking University)"
        />
        <PaperRow
          id="82"
          title="Blastomere Cell Counting and Centroid Localization in Microscopic Images of Human Embryo"
          authors="Reza Moradi Rad, Parvaneh Saeedi (Simon Fraser University), Jason Au, and Jon Havelock (Pacific Centre for Reproductive Medicine)"
        />
        <PaperRow
          id="98"
          title="Spatial Reinforcement and Immersive Audio"
          authors="Timothy Bartoo (Harmonic Functions), Robin Whittaker, and Dave Haydon (Outboard Electronics)"
        />
        <PaperRow
          id="142"
          title="Reliability Analysis of IoVT Based Intelligent Video Surveillance System"
          authors="Tanin Sultana, Mohammad Wajih Alam, and Khan A. Wahid (University of Saskatchewan)"
        />
        <PaperRow
          id="156"
          title="Deep Transfer Learning for Hyperspectral Image Classification"
          authors="Jianzhe Peter Lin, Z. Jane Wang, and Rabab Ward (University of British Columbia)"
        />
        <PaperRow
          id="158"
          title="MV-YOLO: Motion Vector-Aided Tracking by Semantic Object Detection"
          authors="Saeed Ranjbar Alvar and Ivan V. Bajić (Simon Fraser University)"
        />
      </tbody>
    </table>

    <h4 className={styles.nomarginb}>Lecture Session LS.W1: Visual Indexing, Analysis, and Representation</h4>
    <p className={styles.nomarginb}>Session Chair: Parvaneh Saeedi</p>
    <p>Time: 2:50pm – 4:20pm</p>

    <table>
      <tbody>
        <tr>
          <th width="5%">ID</th>
          <th width="95%">Title and Authors</th>
        </tr>
        <PaperRow
          id="7"
          title="Feature Fusion for Robust Patch Matching with Compact Binary Descriptors"
          authors="Andrea Migliorati (Università degli Studi di Brescia), Attilio Fiandrotti (Politecnico di Torino), Gianluca Francini (Telecom Italia S.P.A), Skjalg Lepsøy (Telecom Italia S.P.A), and Riccardo Leonardi (Università degli Studi di Brescia)"
        />
        <PaperRow
          id="33"
          title="Efficient Object Tracking in Compressed Video Streams with Graph Cuts"
          authors="Fernando Bombardelli (Fraunhofer HHI), Serhan Gül (Fraunhofer HHI), Daniel Becker (Daimler Center for Automotive IT Innovations), Matthias Schmidt (Daimler Center for Automotive IT Innovations), and Cornelius Hellge (Fraunhofer HHI)"
        />
        <PaperRow
          id="76"
          title="Sparse Hartley Modeling for Fast Image Extrapolation"
          authors="Nils Genser, Simon Grosche, Jürgen Seiler, and Andre Kaup (Friedrich-Alexander-Universität Erlangen-Nürnberg)"
        />
        <PaperRow
          id="94"
          title="CPNet: A Context Preserver Convolutional Neural Network for Detecting Shadows in Single RGB Images"
          authors="Sorour Mohajerani and Parvaneh Saeedi (Simon Fraser University)"
        />
        <PaperRow
          id="159"
          title="A Cloud Detection Algorithm for Remote Sensing Images Using Fully Convolutional Neural Networks"
          authors="Sorour Mohajerani, Parvaneh Saeedi, and Thomas A. Krammer (Simon Fraser University)"
        />
      </tbody>
    </table>

    <h4 className={styles.nomarginb}>Lecture Session LS.W2: Multimedia Compression</h4>
    <p className={styles.nomarginb}>Session Chair: TBA</p>
    <p>Time: 4:30pm – 6:00pm</p>

    <table>
      <tbody>
        <tr>
          <th width="5%">ID</th>
          <th width="95%">Title and Authors</th>
        </tr>
        <PaperRow
          id="37"
          title="Test Zonal Search based on Region Label (TZSR) for Motion Estimation in HEVC"
          authors="Iris C. Linck (University of Colorado, Denver), Arthur Gomez (CNPq, Brasilia), and Gita Alaghband (University of Colorado, Denver)"
        />
        <PaperRow
          id="46"
          title="Motion Compensated Prediction for Translational Camera Motion in Spherical Video Coding"
          authors="Bharath Vishwanath, Kenneth Rose, and Tejaswi Nanjundaswamy (University of California, Santa Barbara)"
        />
        <PaperRow
          id="93"
          title="Deep Network Based Image Compression with Adaptive Pre- and Postprocessing"
          authors="Shurun Wang, Zhenghui Zhao, Chuanmin Jia, Xiang Zhang (Peking University), Xinfeng Zhang (University of Southern California), Shanshe Wang, Siwei Ma, and Wen Gao (Peking University)"
        />
        <PaperRow
          id="151"
          title="Near-Lossless Deep Feature Compression for Collaborative Intelligence"
          authors="Hyomin Choi and Ivan V. Bajić (Simon Fraser University)"
        />
        <PaperRow
          id="157"
          title="Downsampling Based Image Coding Using Dual Dictionary Learning and Sparse Representations"
          authors="Ali Akbari and Maria Trocan (Institut Supérieur d’Electronique de Paris)"
        />
      </tbody>
    </table>

    <h3 style={{backgroundColor: "#cccccc", textAlign: "center", padding: ".5rem"}}>Thursday, August 30, 2018</h3>
    <h3 className={styles.nomarginb}>Keynote 2</h3>
    <p>Time: 9:00am – 10:00am</p>

    <SpeakerKeynote
      keynote_title="Title: TBD"
      speaker_name="Jenq-Neng Hwang"
      speaker_title="Professor and Associate Chair, Department of Electrical Engineering, University of Washington"
      avatar= {Jeng_Neng_Hwang}
      speaker_desc="Dr. Jenq-Neng Hwang received the BS and MS degrees, both in electrical engineering from the National Taiwan University, Taipei, Taiwan, in 1981 and 1983 separately. He then received his Ph.D. degree from the University of Southern California. In the summer of 1989, Dr. Hwang joined the Department of Electrical Engineering of the University of Washington in Seattle, where he has been promoted to Full Professor since 1999. He served as the Associate Chair for Research from 2003 to 2005, and from 2011-2015. He is currently the Associate Chair for Global Affairs and International Development in the EE Department. He has written more than 330 journal, conference papers and book chapters in the areas of multimedia signal processing, and multimedia system integration and networking, including an authored textbook on 'Multimedia Networking: from Theory to Practice', published by Cambridge University Press. Dr. Hwang has close working relationship with the industry on multimedia signal processing and multimedia networking. Dr. Hwang received the 1995 IEEE Signal Processing Society's Best Journal Paper Award. He is a founding member of Multimedia Signal Processing Technical Committee of IEEE Signal Processing Society and was the Society's representative to IEEE Neural Network Council from 1996 to 2000. He is currently a member of Multimedia Technical Committee (MMTC) of IEEE Communication Society and also a member of Multimedia Signal Processing Technical Committee (MMSP TC) of IEEE Signal Processing Society. He served as associate editors for IEEE T-SP, T-NN and T-CSVT, T-IP and Signal Processing Magazine (SPM). He is currently on the editorial board of ZTE Communications, ETRI, IJDMB and JSPS journals. He served as the Program Co-Chair of IEEE ICME 2016 and was the Program Co-Chairs of ICASSP 1998 and ISCAS 2009. Dr. Hwang is a fellow of IEEE since 2001."
    />

    <h4 className={styles.nomarginb}>Special Session SS.T1: Recent Advances in Image Restoration and Quality Metrics for Restoration Algorithms</h4>
    <p className={styles.nomarginb}>Session Chairs: Xianming Liu, Shiqi Wang, and Guangtao Zhai</p>
    <p>Time: 10:20am – 12:10pm</p>


    <table>
      <tbody>
        <tr>
          <th width="5%">ID</th>
          <th width="95%">Title and Authors</th>
        </tr>
        <PaperRow
          id="38"
          title="Enhanced Steerable Pyramid Transformation for Medical Ultrasound Image Despeckling"
          authors="Prerna Singh, Ramakrishnan Mukundan (University of Canterbury), and Rex De Ryke (Canterbury District Health Board)"
        />
        <PaperRow
          id="41"
          title="Color-Guided Depth Map Super-Resolution via Joint Graph Laplacian and Gradient Consistency Regularization"
          authors="Rong Chen, Deming Zhai, Xianming Liu, and Debin Zhao (Harbin Institute of Technology)"
        />
        <PaperRow
          id="89"
          title="Reduced-Reference Image Quality Assessment Based on Free-Energy Principle with Multi-Channel Decomposition"
          authors="Wenhan Zhu, Guangtao Zhai, and Xiaokang Yang (Shanghai Jiao Tong University)"
        />
        <PaperRow
          id="102"
          title="Convolutional Neural Network Based Intermediate View Synthesis for Light Field Image Compression"
          authors="Yekang Yang, Zhenghui Zhao, Chuanmin Jia, Xiang Zhang, Shanshe Wang, and Siwei Ma (Peking University)"
        />
        <PaperRow
          id="112"
          title="A Large-Scale Compressed 360-Degree Spherical Image database: From Subjective Quality Evaluation to Objective Model Comparison"
          authors="Wei Sun (Shanghai Jiao Tong University), Ke Gu (Beijing University of Technology), Siwei Ma (Peking University), and Guangtao Zhai (Shanghai Jiao Tong University)"
        />
        <PaperRow
          id="139"
          title="ConvCSNet: A Convolutional Compressive Sensing Framework Based on Deep Learning"
          authors="Xiaotong Lu, Weisheng Dong, Peiyao Wang, Guangming Shi, and Xuemei Xie (Xidian University)"
        />
      </tbody>
    </table>

    <h4 className={styles.nomarginb}>Poster Session PS.T1: Multimedia Processing and Analysis II</h4>
    <p className={styles.nomarginb}>Session Chair: TBA</p>
    <p>Time: 1:30pm – 2:30pm</p>

    <table>
      <tbody>
        <tr>
          <th width="5%">ID</th>
          <th width="95%">Title and Authors</th>
        </tr>
        <PaperRow
          id="39"
          title="Video Classification of Farming Activities with Motion-Adaptive Feature Sampling"
          authors="He Liu, Amy R. Reibman, Aaron C. Ault, and James V. Krogmeier (Purdue University)"
        />
        <PaperRow
          id="53"
          title="A New Retrieval System Based on Low Dynamic Range Expansion and SIFT Descriptor"
          authors="Raoua Khwildi and Azza Ouled Zaid (Université de Tunis)"
        />
        <PaperRow
          id="61"
          title="Non-local Super Resolution in Ultrasound Imaging"
          authors="Parviz Khavari, Amir Asif, and Hassan Rivaz (Concordia University)"
        />
        <PaperRow
          id="78"
          title="Image Forensics in Online News"
          authors="Federica Lago, Quoc-Tin Phan, and Giulia Boato (University of Trento)"
        />
        <PaperRow
          id="90"
          title="A Dual Path Deep Network for Single Image Super-Resolution Reconstruction"
          authors="Fateme Mirshahi and Parvaneh Saeedi (Simon Fraser University)"
        />
        <PaperRow
          id="95"
          title="SPmat: A Framework and Data Representation for Binary Image Processing"
          authors="Fabrizio Pedersoli and George Tzanetakis (University of Victoria)"
        />
        <PaperRow
          id="99"
          title="Identifying Image Provenance: An Analysis of Mobile Instant Messaging Apps"
          authors="Quoc-Tin Phan (University of Trento), Cecilia Pasquini (Universität Innsbruck), Giulia Boato, and Francesco De Natale (University of Trento)"
        />
        <PaperRow
          id="130"
          title="Quality Assessment of Deep-Learning-Based Image Compression"
          authors="Giuseppe Valenzise (Université Paris-Sud), Andrei Purica (Telecom ParisTech), Vedad Hulusic (Bournemouth University), and Marco Cagnazzo (Telecom ParisTech)"
        />
        <PaperRow
          id="143"
          title="Fast 3D Point Cloud Denoising via Bipartite Graph Approximation & Total Variation"
          authors="Chinthaka Dinesh (Simon Fraser University), Gene Cheung (National Institute of Informatics, Japan), Ivan V. Bajić (Simon Fraser University), and Cheng Yang (National Institute of Informatics, Japan)"
        />
      </tbody>
    </table>

    <h4 className={styles.nomarginb}>Lecture Session LS.T1: Multimedia Processing, Forensics, and Analysis</h4>
    <p className={styles.nomarginb}>Session Chair: TBA</p>
    <p>Time: 2:50pm – 4:20pm</p>

    <table>
      <tbody>
        <tr>
          <th width="5%">ID</th>
          <th width="95%">Title and Authors</th>
        </tr>
        <PaperRow
          id="27"
          title="Image Inpainting Detection Based on a Modified Formulation of Canonical Correlation Analysis"
          authors="Xiao Jin (Tianjin University), Yu-ting Su (Tianjin University), Yongwei Wang (University of British Columbia), and Z. Jane Wang (University of British Columbia)"
        />
        <PaperRow
          id="60"
          title="Color Noise-Based Feature for Splicing Detection and Localization"
          authors="Christophe Destruel, Vincent Itier, Olivier Strauss, and William J.-P. Puech (Université de Montpellier)"
        />
        <PaperRow
          id="84"
          title="An Adaptive Bandpass Filter based on Temporal Spectrogram Analysis for Photoplethysmography Imaging"
          authors="Timon Blöcher, Kai Zhou, Simon Krause (FZI Forschungszentrum Informatik), and Wilhelm Stork (Kalrsruhe Institute of Technology)"
        />
        <PaperRow
          id="121"
          title="Decoding Music in the Human Brain using EEG Data"
          authors="Chris Foster, Dhanush Dharmaretnam, Haoyan Xu, and George Tzanetakis (University of Victoria)"
        />
        <PaperRow
          id="133"
          title="Improving Real-time Pedestrian Detection using Adaptive Confidence Thresholding and Inter-Frame Correlation"
          authors="Mufleh Al-Shatnawi, Vida Movahedi (York University), Amir Asif (Concordia University), and Aijun An (York University)"
        />
      </tbody>
    </table>

    <h4 className={styles.nomarginb}>Lecture Session LS.T2: Multimedia Quality, Human Factors, and HCI</h4>
    <p className={styles.nomarginb}>Session Chair: TBA</p>
    <p>Time: 4:30pm – 6:00pm</p>

    <table>
      <tbody>
        <tr>
          <th width="5%">ID</th>
          <th width="95%">Title and Authors</th>
        </tr>
        <PaperRow
          id="8"
          title="Hybrid-based Facial Expression Recognition Approach for Human-Computer Interaction"
          authors="Yacine Yaddaden (Université du Québec à Chicoutimi), Mehdi Adda (Université du Québec à Rimouski), Abdenour Bouzouane, Sebastien Gaboury, and Bruno Bouchard (Université du Québec à Chicoutimi)"
        />
        <PaperRow
          id="18"
          title="Study on Viewing Time with Regards to Quality Factors in Adaptive Bitrate Video Streaming"
          authors="Pierre Lebreton, Kimiko Kawashima, Kazuhisa Yamagishi, and Jun Okamoto (NTT Network Technology Laboratories)"
        />
        <PaperRow
          id="59"
          title="User-Independent Detection of Swipe Pressure using a Thermal Camera for Natural Surface Interaction"
          authors="Tim Dunn, Sean Banerjee, and Natasha Kholgade Banerjee (Clarkson University)"
        />
        <PaperRow
          id="104"
          title="Video Quality Evaluation for Tile-Based Spatial Adaptation"
          authors="Hiba Yousef, Jean Le Feuvre (Telecom ParisTech), Giuseppe Valenzise (Université Paris-Sud), and Vedad Hulusic (Bournemouth University)"
        />
        <PaperRow
          id="115"
          title="Heterogeneous Spatial Quality for Omnidirectional Video"
          authors="Hristina Hristova, Xavier Corbillon, Gwendal Simon (IMT Atlantique), Viswanathan Swaminathan (Adobe), and Alisa Devlic (Huawei)"
        />
      </tbody>
    </table>

    <h3 style={{backgroundColor: "#cccccc", textAlign: "center", padding: ".5rem"}}>Friday, August 31, 2018</h3>
    <h3 className={styles.nomarginb}>Keynote 3</h3>
    <p>Time: 9:00am – 10:00am</p>

    <SpeakerKeynote
      keynote_title="Title: TBD"
      speaker_name="Henrique Malvar"
      speaker_title="Chief Scientist, Microsoft Research"
      avatar= {Henrique_Malvar}
      speaker_desc="Henrique (Rico) Malvar is a Microsoft Distinguished Engineer and the Chief Scientist for Microsoft Research. He currently leads a new team at MSR developing technologies for people with disabilities. He joined Microsoft Research in 1997, founding the signal processing group, which developed new technologies such as new media compression formats used in Windows, Xbox, and Office, and microphone array processing technologies used in Windows, Xbox Kinect, and HoloLens. Rico was a key architect for the media compression formats WMA and JPEG XR and made key contributions to the H.264 video format, used by most Web video services. Rico received a PhD from MIT in 1986 and is a Member of the US National Academy of Engineering. He has over 120 issued US patents and over 160 publications. He is an IEEE Fellow and has received many awards, including the Technical Achievement Award from the IEEE Signal Processing Society in 2002."
    />

    <h4 className={styles.nomarginb}>Special Session SS.F1: Multimodal Machine Learning: Advances and Applications</h4>
    <p className={styles.nomarginb}>Session Chairs: Huisheng Wang and Qifei Wang</p>
    <p>Time: 10:20am – 12:10pm</p>

    <table>
      <tbody>
        <tr>
          <th width="5%">ID</th>
          <th width="95%">Title and Authors</th>
        </tr>
        <PaperRow
          id="21"
          title="Privacy-Preserving Age Estimation for Content Rating"
          authors="Linwei Ye (University of Manitoba), Binglin Li (Simon Fraser University), Noman Mohammed (University of Manitoba), Yang Wang (University of Manitoba), and Jie Liang (Simon Fraser University)"
        />
        <PaperRow
          id="24"
          title="Adversarial Attacks on Face Detectors using Neural Net Based Constrained Optimization"
          authors="Avishek Bose and Parham Aarabi (University of Toronto)"
        />
        <PaperRow
          id="49"
          title="Fast, Robust, and Accurate Image Denoising via Very Deeply Cascaded Residual Networks"
          authors="Lulu Sun, Yongbing Zhang, Xingzheng Wang, Haoqian Wang, and Qionghai Dai (Tsinghua University)"
        />
        <PaperRow
          id="55"
          title="3-Stream Convolutional Networks for Video Action Recognition with Hybrid Motion Field"
          authors="Wukui Yang, Shan Gao, Wenran Liu, and Xiangyang Ji (Tsinghua University)"
        />
        <PaperRow
          id="147"
          title="A Robust HER2 Neural Network Classification Algorithm Using Biomarker-Specific Feature Descriptors"
          authors="Prerna Singh and Ramakrishnan Mukundan (University of Canterbury)"
        />
      </tbody>
    </table>

    <h4 className={styles.nomarginb}>Poster/Demo Session PS.F1: Multimedia Systems, Tools, and Applications</h4>
    <p className={styles.nomarginb}>Session Chair: TBA</p>
    <p>Time: 1:30pm – 2:30pm</p>

    <table>
      <tbody>
        <tr>
          <th width="5%">ID</th>
          <th width="95%">Title and Authors</th>
        </tr>
        <PaperRow
          id="132"
          title="Cloud-Based Tools for Endangered Language Documentation and Analysis"
          authors="Archana Dhere and Min Chen (University of Washington, Bothell)"
        />
        <PaperRow
          id="140"
          title="Similar Image Retrieval from X-Ray Database"
          authors="Nandinee Fariah Haq (University of British Columbia) and Mehdi Moradi (IBM Almaden Research Center)"
        />
        <PaperRow
          id="160"
          title="Crop Disease Automatic Diagnosis System Based on Smart Mobile Phone and CNN"
          authors="Wanjie Liang (Jiangsu Academy of Agricultural Sciences), Zhang Hong (University of Alberta), and Hongxin Cao (Jiangsu Academy of Agricultural Sciences)"
        />
        <PaperRow
          id="161"
          title="Clustering-Based Encoding Adaptation for Video Streaming"
          authors="Hai Wei, Yang Yang, Deepthi Nandakumar, Srikanth Kotagiri, Yongjun Wu, Ben Waggoner, Avisar Ten-ami, Bruce Li, and Winston BA (Amazon Video)"
        />
        <PaperRow
          id="162"
          title="A Novel Augmented Reality Framework for Museum Exhibits"
          authors="Julien Li-Chee-Ming, Zheng Wu, Randy Tan, Ryan Tan, Naimul Mefraz Khan, Andy Ye,  and Ling Guan (Ryerson University)"
        />
        <PaperRow
          id="163"
          title="Automatic Music Accompaniment System Applied to Singing Recreation at Long-Term Geriatric Health-Care Facilities"
          authors="Yasuyuki Saito (National Institute of Technology), Yasuji Sakai (Atsugi-city Animated Supporter), Yuu Igarashi (Sound Scape), Eita Nakamura (Kyoto University), Suguru Agata (Asia Pacific Electronic Keyboard Association), and Shigeki Sagayama (Meiji University)"
        />
        <PaperRow
          id="164"
          title="Effects Selection Tool for Improving Visual Attraction of a Target Object"
          authors="Natsumi Suzuki and Yohei Nakada (Meiji University)"
        />
        <PaperRow
          id="165"
          title="De-sketching"
          authors="Lior Bragilevsky and Ivan V. Bajić (Simon Fraser University)"
        />
        <PaperRow
          id="166"
          title="DFTS: Deep Feature Transmission Simulator"
          authors="Harshavardhan Unnibhavi (Indian Institute of Technology (ISM), Dhanbad), Hyomin Choi, Saeed Ranjbar Alvar, and Ivan V. Bajić (Simon Fraser University)"
        />
        <PaperRow
          id="168"
          title="Restricted Live Streaming Genre Identification"
          authors="Dong Her Shih, Meng-Yan Lin, and Po-Yuan Shih (National Yunlin University of Science and Technology)"
        />
        <PaperRow
          id="170"
          title="A Recurrent Neural Network for Multisensory Non-Intrusive Load Monitoring on a Raspberry Pi"
          authors="Alon Harell, Stephen Makonin, and Ivan V. Bajić (Simon Fraser University)"
        />
      </tbody>
    </table>

    <h4 className={styles.nomarginb}>Lecture Session LS.F1: Deep Learning for Multimedia Processing</h4>
    <p className={styles.nomarginb}>Session Chair: TBA</p>
    <p>Time: 2:50pm – 4:20pm</p>

    <table>
      <tbody>
        <tr>
          <th width="5%">ID</th>
          <th width="95%">Title and Authors</th>
        </tr>
        <PaperRow
          id="10"
          title="Rethinking Recurrent Latent Variable Model for Music Composition"
          authors="Eunjeong Stella Koh, Shlomo Dubnov, and Dustin Wright (University of California, San Diego)"
        />
        <PaperRow
          id="32"
          title="Deep Siamese Network for Multiple Object Tracking"
          authors="Bonan Cuan, Khalid Idrissi, and Christophe Garcia (INSA-Lyon)"
        />
        <PaperRow
          id="56"
          title="Bone Age Assessment with X-ray Images Based on Contourlet Motivated Deep Convolutional Networks"
          authors="Xun Chen, Chao Zhang, and Yu Liu (Hefei University of Technology)"
        />
        <PaperRow
          id="88"
          title="A Deep Convolutional Network Based Supervised Coarse-to-Fine Algorithm for Optical Flow Measurement"
          authors="Meiyuan Fang, Yanghao Li (Tsinghua University), Yuxing Han (South China Agriculture University), and Jiangtao Wen (Tsinghua University)"
        />
        <PaperRow
          id="108"
          title="Memory-Efficient Deep Salient Object Segmentation Networks on Gridized Superpixels"
          authors="Caglar Aytekin, Xingyang Ni, Francesco Cricri, Lixin Fan, and Emre Aksu (Nokia Technologies)"
        />
      </tbody>
    </table>

  </div>
)

export default TechnicalPage
