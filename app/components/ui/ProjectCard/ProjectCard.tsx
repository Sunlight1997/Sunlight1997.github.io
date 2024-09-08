/* eslint-disable react/require-default-props */
'use client';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import { StackedCarouselProps } from 'react-stacked-center-carousel';
import { Project } from 'shared/utils/types';
import React, { useEffect, useRef, useState } from 'react';
import getProjectProps from './convert';
import { useResizeDetector } from 'react-resize-detector';
import throttle from 'shared/utils/throttle';

type Props = {
  project: Project;
  filter?: {
    key:
      | 'slug'
      | 'tagline'
      | 'description'
      | 'img'
      | 'name'
      | 'tags'
      | 'github'
      | 'category'
      | 'featured'
      | 'launch_video'
      | 'url';
    value: string | boolean;
  };
};

let dimension = { width: 0, height: 0 };
let resizeTO: any = null;

const ProjectCard = React.memo(function (props: StackedCarouselProps): JSX.Element {
  const { slug, tagline, description, img, name, tags, github, category, featured, url, selected, reRender } =
    props.data[props.dataIndex];
  const { width, _, ref } = useResizeDetector();
  const onImageLoad = (e) => {
    dimension = { height: e.nativeEvent.srcElement.naturalHeight, width: e.nativeEvent.srcElement.naturalWidth };
  };

  let height = 500;
  if (width) height = (width / dimension.width) * dimension.height;
  console.log(height);
  return (
    <>
      {/* <Tilt className="Tilt cursor-pointer"> */}
      <div
        ref={ref}
        className={`w-full h-[400px] my-10 mx-8 lg:mx-16 rounded-2xl`}
      >
        {selected == props.dataIndex ? (
          <a href={url}>
            <img src={img} alt={name} className="rounded-2xl w-full h-auto object-cover" onLoad={onImageLoad} />
          </a>
        ) : (
          <img src={img} alt={name} className="rounded-2xl w-full h-auto object-cover" onLoad={onImageLoad} />
        )}
      </div>
      {/* </Tilt> */}
    </>
  );
});

export default ProjectCard;
