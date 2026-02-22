---
title: "Diffusion Models For Medical Imaging"
shorttitle: "Diffusion Models For Medical Imaging"
summary: Diffusion Models for Medical Imaging

collection: tutorials
permalink: /tutorials/diffusion-2023
sidebar:
  nav: "tutorials"
---


A **MICCAI 2023** Tutorial.

![MICCAI 2023]({{ base_path }}/assets/images/miccai_brain.gif)
*Animation based on [2]*
<!---
Gif was generated based on https://www.youtube.com/watch?v=eQbi41lZgy4&ab_channel=NuxttuxCreativeStudio
-->

# News 
- 2023-10-09: Slides available [here]({{ base_path }}/assets/pdfs/Miccai2023_Tutorial_Diffusion_Models_slide_deck.pdf).
- 2023-10-08: Thank you everyone who contributed to the tutorial! We had a great time and we hope you did too! We will be uploading the slides and the code soon. Stay tuned!
- 2023-10-01: Tutorial location: Vanpdfscouver Convention Center East Building Level 1 - Meeting Room 8.
- 2023-30-07: The tutorial will happen on 8 October 2023 - Sunday afternoon (PM).
- 2023-14-03: The tutorial **Diffusion Models for Medical Imaging** has been ACCEPTED for [MICCAI 2023](https://conferences.miccai.org/2023/en/default.asp)!

# Outline

There has been an explosion of developments in generative models in machine learning (including Variational Auto-Encoders or VAEs, Generative Adversarial Networks or GANs, Normalizing Flows or NFs) that enable us to generate high-quality, realistic synthetic data such as high-dimensional images, volumes, or tensors. Recently a (re)newed breed of generative models, Diffusion Models have shown impressive ability in generating high-quality imaging data. Applications of diffusion models in medical image analysis are already appearing in the context of image reconstruction, denoising, anomaly detection, segmentation, generation of data, and causality.

This tutorial presents an overview of generative modelling, focusing on diffusion models (theory and learning tricks). We will discuss applications in the medical imaging field and overview existing open-ended challenges. We will also offer a session with demo and code that build upon the recently released open-source library [MONAI generative models](https://github.com/Project-MONAI/GenerativeModels). 

![diffusion tasks]({{ base_path }}/assets/images/diffusion_medical_img.png)
*Figure from [1]*

# Tutorial Schedule

1. Introduction [60 mins]
  - Introduction to generative models
  - Diffusion models theory
  - Denoising diffusion probabilistic models
  - Training and Inference
  - MONAI Generative Models: Introduction and DEMO [Coding tutorial on DDPM](https://github.com/Project-MONAI/GenerativeModels/tree/main/tutorials/generative/2d_ddpm)

2. Advanced Topics [60 min]
  - Schedulers: How to accelerate sampling? Deterministic Sampling
  - Conditioning: Classifier Guidance; Classifier-free Guidance; Super-resolution; Inpainting; Others.
  - MONAI Generative Models: DEMO on [Classifier-free guidance](https://github.com/Project-MONAI/GenerativeModels/tree/main/tutorials/generative/classifier_free_guidance)
    
3. Coffee break (30mins)

4. Applications in medical imaging [60 mins]
  - Synthesis
  - Reconstruction
  - Segmentation
  - Anomaly Detection
  - Miscellaneous

5. Round table [60 mins]
  - Trends and open challenges
  - Round table (We invite experts in the field to join the discussion)
  - Q&A

# Learning Objectives

1. Understand the differences between implicit vs explicit likelihood generative models
2. Understand the intuition and theory behind diffusion models
3. Appreciate and learn different applications of diffusion models in medical image analysis and imaging
4. Appreciate current limitations of diffusion models
5. Learn how to use MONAI Generative Models to train and use diffusion models

# Organizing Team

- Mr. [Pedro Sanchez](https://vios.science/team/sanchez) is a PhD student at the University of Edinburgh

- Dr. [Walter H L Pinaya](https://warvito.github.io/) is a research fellow at the Department of Biomedical Engineering at the King’s College London.

- Dr. [Julia Wolleb](https://dbe.unibas.ch/en/persons/julia-wolleb/) is a postdoctoral researcher at the Department of Biomedical Engineering at the University of Basel.

- Prof [Dorit Merhof](https://scholar.google.com/citations?user=0c0rMr0AAAAJ&hl=en) is Chair in Image Analysis and Computer Vision with the University of Regensburg (UR), Germany.

- Prof. [Jorge Cardoso](https://amigos.ai/people/jorge_cardoso/) is a Reader in Artificial Medical Intelligence at King’s College London. Jorge is also the CTO of the new London Medical Imaging and AI Centre for Value-based Healthcare.

- Prof [Sotirios A. Tsaftaris](https://vios.science/team/tsaftaris) is the Canon Medical / Royal Academy of Engineering Research Chair in Healthcare AI with the University of Edinburgh, United Kingdom.

# Some Resources

1. Kazerouni, Amirhossein, et al. "Diffusion models for medical image analysis: A comprehensive survey." arXiv preprint arXiv:2211.07804 (2022).
2. Pinaya, Walter HL, et al. "Brain imaging generation with latent diffusion models." Deep Generative Models: Second MICCAI Workshop, DGM4MICCAI 2022 (2022).
3. https://github.com/heejkoo/Awesome-Diffusion-Models is a great github repository with up to date information on published diffusion model papers.


<!---
# Accompanying Material {#material}

 Sotos recently gave a [keynote at MICAD 2022](https://www.micad.org/pages/keynote.html) on Diffusion Models in Medical Imaging and Analysis. Hype or Hope?

| [![YouTube]({{ base_path }}/assets/images/youtube_logo.png)](https://www.youtube.com/watch?v=WA7hn9cyRdo) | [![ppt_logo]({{ base_path }}/assets/images/ppt_logo.png)]({{ base_path }}/assets/pdfs/20221101_Sotos_Micad_diffusionHope.pdf)

- The video is available on the MICAD YouTube channel, find it [here](https://www.youtube.com/watch?v=WA7hn9cyRdo);
- The tutorial's slide deck in pdf is also available [here]({{ base_path }}/assets/pdfs/20221101_Sotos_Micad_diffusionHope.pdf).
-->
