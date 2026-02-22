---
title: "DiMEDIA:Diffusion Models in Medical Imaging and Analysis"
shorttitle: "DiMEDIA-2024"
summary: Diffusion Models in Medical Imaging and Analysis

collection: tutorials
permalink: /tutorials/DiMEDIA-2024
sidebar:
  nav: "tutorials"
---


A **ISBI 2024** Tutorial.

![ISBI 2024]({{ base_path }}/assets/images/dimedia_2024.png)
![Medical Diffusion]({{ base_path }}/assets/images/medical_diffusion.png)


# News 
- 2024-28-05: The tutorial slides is publicly available here: [DiMEDIA](https://drive.google.com/file/d/1JOap7m976yL9YG2oG_w2f7-g6FsygcKI/view?usp=drive_link) !
- 2024-28-05: The code for demostration is public in Github: [ISBI 2024 DiMEDIA MONAI Tutorial](https://github.com/vios-s/ISBI-2024-DiMEDIA-MONAI-Tutorial) !
- 2024-16-04: The tutorial will happen on 28 May 2024 - Tuesday afternoon (PM).
- 2024-09-01: The tutorial **DiMEDIA:Diffusion Models in Medical Imaging and Analysis** has been ACCEPTED for [ISBI 2024](https://biomedicalimaging.org/2024/tutorials-final/)!

# Outline

There has been an explosion of developments in generative models in machine learning (including Variational Auto-Encoders or VAEs, Generative Adversarial Networks or GANs, Normalizing Flows or NFs) that enable us to generate high-quality, realistic synthetic data such as high-dimensional images, volumes, or tensors. Recently a (re)newed breed of generative models, Diffusion Models have shown impressive ability in generating high-quality imaging data. Applications of diffusion models in medical image analysis are already appearing in the context of image reconstruction, denoising, anomaly detection, segmentation, generation of data, and causality. This tutorial presents an overview of generative modelling, focusing on diffusion models (theory and learning tricks). We will discuss applications in the medical imaging field and overview existing open-ended challenges. It builds on the highly successful and sold-out tutorial at MICCAI 2023.
 
![diffusion tasks]({{ base_path }}/assets/images/diffusion_medical_img.png)
*Figure from [1]*

# Tutorial Schedule

1. Part 1: Introduction (60 mins)
  - What? Why? How?
  - Denoising Diffusion Models
  - Understanding and Intuition
2. Part 2: Advanced Topics (30 mins)
  - Sampling Strategies
  - Inference-time Conditioning
  - Training-time Conditioning
  - Trends in architecture and acceleration
3. Coffee break (30mins)
4. Applications in medical imaging [30 mins]
  - Synthesis
  - Reconstruction
  - Segmentation
  - Anomaly Detection
  - Miscellaneous
5. Demostration (30 mins)
  - DEMO - MONAI Generative Models Coding tutorial on DDPM
  - DEMO - MONAI Generative ModelsDDIM Inversion + Classifier-free guidance
6. Talk and Discussion (30 mins)

# Learning Objectives

1. Understand the intuition and theory behind diffusion models
2. Present with demonstrations a software tool within MONAI (AI Toolkit for Healthcare Imaging) for applying diffusion models to medical imaging and image analysis
3. Appreciate and learn different applications of diffusion models in medical image analysis and image imaging
4. Appreciate current limitations of diffusion models

# Organizing Team

- Mr. [Yuyang Xue](https://vios.science/team/yuyang) is a PhD student at the University of Edinburgh

- Ms. [Nefeli Gkouti](https://vios.science/team/nefeli) Nefeli Gkouti is a PhD student at Archimedes RU / Athena RC and at the National and Kapodistrian University of Athens.

- Dr. [Julia Wolleb](https://dbe.unibas.ch/en/persons/julia-wolleb/) is a postdoctoral researcher at the Department of Biomedical Engineering at the University of Basel.

- Prof [Sotirios A. Tsaftaris](https://vios.science/team/tsaftaris) is the Canon Medical / Royal Academy of Engineering Research Chair in Healthcare AI with the University of Edinburgh, United Kingdom.

# Some Resources

1. Kazerouni, Amirhossein, et al. "Diffusion models for medical image analysis: A comprehensive survey." arXiv preprint arXiv:2211.07804 (2022).
2. https://github.com/heejkoo/Awesome-Diffusion-Models is a great github repository with up to date information on published diffusion model papers.


<!---
# Accompanying Material {#material}

 Sotos recently gave a [keynote at MICAD 2022](https://www.micad.org/pages/keynote.html) on Diffusion Models in Medical Imaging and Analysis. Hype or Hope?

| [![YouTube]({{ base_path }}/assets/images/youtube_logo.png)](https://www.youtube.com/watch?v=WA7hn9cyRdo) | [![ppt_logo]({{ base_path }}/assets/images/ppt_logo.png)]({{ base_path }}/assets/pdfs/20221101_Sotos_Micad_diffusionHope.pdf)

- The video is available on the MICAD YouTube channel, find it [here](https://www.youtube.com/watch?v=WA7hn9cyRdo);
- The tutorial's slide deck in pdf is also available [here]({{ base_path }}/assets/pdfs/20221101_Sotos_Micad_diffusionHope.pdf).
-->
