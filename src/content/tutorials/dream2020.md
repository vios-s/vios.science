---
title: "DREAM 2020: Disentangled Representations for Efficient Algorithms for Medical data"
shorttitle: "DREAM 2020"
summary: At Miccai 2020, we introduce and motivate the use of disentangled representations in medical imaging and present the latest methods.
collection: tutorials
permalink: /tutorials/dream2020
sidebar:
  nav: "tutorials"
---
A MICCAI 2020 (Peru) Tutorial by Sotirios A. Tsaftaris and Alison Q. O'Neil.

![DREAM 2020]({{ base_path }}/assets/images/dream.png)

## Outline {#outline}
Disentangled representation learning has been proposed as an approach to
learning general representations. This can be done in the absence of
annotations, or with limited annotation. A good general representation can be
readily fine-tuned for new target tasks using modest amounts of data. This
alleviation of the data and annotation requirements offers tantalising prospects
for tractable and affordable healthcare. Finally, disentangled representations
can offer model explainability, increasing their suitability for real-world
deployment.

In this **half-day** tutorial, a satellite event in conjunction with [MICCAI
2020](https://miccai2020.org/) (Peru), we will offer an overview of
representation learning and disentangled representation learning and criteria,
and discuss applications in medical imaging and the wider spectrum of EHR data.
We will conclude with open ended challenges. 

## Program {#program}
**Virtual Format**: On the MICCAI platform we have uploaded several videos that
cover the material of the tutorial. Please send us your questions before the
session via email or via the platform. On the day of the tutorial, we will be
offering an abridged version of the pre-recorded video material currently
available on the platform LIVE to further develop audience interaction and
ensure that everyone in the audience is on a `level' playing field. We will
divide the tutorial in sessions, keep each session short, and have live Q&A
immediately after each session. These presentations do not replace the videos
available already but offer a shorter summary. If you have seen the videos
already and have emailed us questions before or submitted questions in the
platform chat and we did not reply we will aim to reply to them live here during
the Q&A. If we run out of time, please do reach out to us offline!

All times are UTC (for BST (current UK time), add +1). The full schedule is
visible below. 

![DREAM 2020]({{ base_path }}/assets/images/schedule.png)

## Learning Objectives {#objectives}
* Understand representation space and why (in)variance matters
* Understand the theories of information bottleneck and compositionality
* Learn the different objectives in achieving disentanglement
* Appreciate the inductive biases introduced by network design choices
* Appreciate when disentanglement is useful in practice

## Motivation {#motivation}
Imagine that we want to develop a system that localises the heart in MRI and CT
images. This system will need to be robust to any changes in imaging, the
scanner, noise, and critically anatomical and pathological variation. The
current paradigm with deep learning is that we *must* present to the system as
many examples as possible to make it robust and learn what is nuisance (e.g.
noise and imaging differences) as opposed to what matters (e.g. the location of
the heart). [A similar argument can be made for organs in a CAI setting.]

Clearly this is not sustainable and leads to poor performance.
Disentangled learning can help because it allows us to learn latent factors that
can describe what we see in the data. In the example on the right, we can
imagine a latent factor that one learns a change in pose (or in the patient for
the cardiac example), and another factor for the change in a car's colour (or a
different scanner). Surprisingly we do not always need annotated data to achieve
this. Moreover, it has been shown that disentangled representations are privacy
preserving; can offer explainability and interpretability; and can generalise to
new tasks (meta-learning) and to new data sources with less effort.

We should (re)appreciate that machine learning (ML) is not simply a functional
mapping between input and output, but one that maps input data to manifolds and
then decisions/tasks. This return to principled design will allow us to evolve
and propose efficient solutions that are robust to new applications and shorten
the path to clinical translation.

Learning suitable representations is key in ML. In fact, the ML community has
the dedicated International Conference on Learning Representations
([ICLR](https://iclr.cc/)). Disentangled learning is considered a hot area: a
dedicated [challenge run at NeurIPS
2019](https://www.aicrowd.com/challenges/neurips-2019-disentanglement-challenge).
According to Google Scholar trends, the number of papers in major ML conferences
doubles yearly . Scientific American, a prestigious periodical in popular
science, had a description of disentangled representation learning in May 2019
([Machine Learning Gets a Bit More
Humanlike](https://www.scientificamerican.com/article/machine-learning-gets-a-bit-more-humanlike/)).
Disentangled learning appeared in MICCAI 3 years ago in a couple of papers, but
now has tripled in appearance. Thus, it is timely to formally introduce this
important area of research in our community.

## Teachers {#teachers}
Prof. Sotirios A Tsaftaris (Sotos) is Chair in Machine Learning and Computer
Vision with the University of Edinburgh and is also the Canon Medical/Royal
Academy of Engineering Research Chair in Healthcare AI. Sotos leads a group
where several young researchers work in machine learning and computer vision. He
obtained his PhD in 2006 from Northwestern University USA and has held several
academic positions in USA, Italy and UK. Sotos's research expertise is in
representation learning. 

Dr Alison Q O’Neil (Alison) is a Senior Scientist in the AI Research Team at
Canon Medical Research Europe and Honorary Research Fellow at the University of
Edinburgh. She obtained her EngD at Canon Medical Research Europe in affiliation
with Heriot-Watt University, and now leads a team of scientists and research
students working on machine learning techniques for industrial healthcare
applications – including applications in medical imaging, natural language
processing, and electronic health record (EHR) data. Alison will bring an
industry perspective to the tutorial and also talk about disentanglement in
other data forms (e.g. text).

## Materials {#materials}
See [MICCAI
platform](https://miccai2020.pathable.co/meetings/virtual/k5n3YF5e7MAFioduk).

## Support {#support}
Generously supported by [Canon Medical Research
Europe](https://research.eu.medical.canon/), the [Royal Academy of
Engineering](https://www.raeng.org.uk/) and the
[School of Engineering](https://www.eng.ed.ac.uk/).  
