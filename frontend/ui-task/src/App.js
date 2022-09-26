import './App.css';
import React, {useRef, useEffect} from 'react';

function App() {

  // Component 1
  const refBox = useRef(null);
  const refTop = useRef(null);
  const refRight = useRef(null);
  const refLeft = useRef(null);
  const refBottom = useRef(null);

  // Component 2
  const refBox2 = useRef(null);
  const refTop2 = useRef(null);
  const refRight2 = useRef(null);
  const refLeft2 = useRef(null);
  const refBottom2 = useRef(null);

  // Component 3
  const refBox3 = useRef(null);
  const refTop3 = useRef(null);
  const refRight3 = useRef(null);
  const refLeft3 = useRef(null);
  const refBottom3 = useRef(null);

  // Effect for Component 1
  useEffect(()=>{
    const resizableElement = refBox.current;
    const styles = window.getComputedStyle(resizableElement);
    let width = parseInt(styles.width, 10); // 100px -> 100
    let height = parseInt(styles.height, 10); // 100px -> 100

    let xcord = 0;
    let ycord = 0;

    resizableElement.style.top = "0px";
    resizableElement.style.left = "0px";

    // TOP
    const onMouseMoveTopResize = (event) => {
      const dy = event.clientY - ycord;
      height = height - dy;
      ycord = event.clientY;
      resizableElement.style.height = `${height}px`;
    };

    const onMouseUpTopResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveTopResize);
    };

    const onMouseDownTopResize = (event) => {
      ycord = event.clientY;
      const styles = window.getComputedStyle(resizableElement);
      resizableElement.style.bottom = styles.bottom;
      resizableElement.style.top = null;
      document.addEventListener("mousemove", onMouseMoveTopResize);
      document.addEventListener("mouseup", onMouseUpTopResize);
    };

    // Bottom
    const onMouseMoveBottomResize = (event) => {
      const dy = event.clientY - ycord;
      height = height + dy;
      ycord = event.clientY;
      resizableElement.style.height = `${height}px`;
    };

    const onMouseUpBottomResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveBottomResize);
    };

    const onMouseDownBottomResize = (event) => {
      ycord = event.clientY;
      const styles = window.getComputedStyle(resizableElement);
      resizableElement.style.top = styles.top;
      resizableElement.style.bottom = null;
      document.addEventListener("mousemove", onMouseMoveBottomResize);
      document.addEventListener("mouseup", onMouseUpBottomResize);
    };

    // Right
    const onMouseMoveRightResize = (event) => {
      const dx = event.clientX - xcord;
      xcord = event.clientX;
      width = width + dx;
      resizableElement.style.width = `${width}px`;
    };

    const onMouseUpRightResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveRightResize);
    };

    const onMouseDownRightResize = (event) => {
      xcord = event.clientX;
      resizableElement.style.left = styles.left;
      resizableElement.style.right = null;
      document.addEventListener("mousemove", onMouseMoveRightResize);
      document.addEventListener("mouseup", onMouseUpRightResize);
    };

    // Left
    const onMouseMoveLeftResize = (event) => {
      const dx = event.clientX - xcord;
      xcord = event.clientX;
      width = width - dx;
      resizableElement.style.width = `${width}px`;
    };

    const onMouseUpLeftResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveLeftResize);
    };

    const onMouseDownLeftResize = (event) => {
      xcord = event.clientX;
      resizableElement.style.right = styles.right;
      resizableElement.style.left = null;
      document.addEventListener("mousemove", onMouseMoveLeftResize);
      document.addEventListener("mouseup", onMouseUpLeftResize);
    };

    // Mouse Down Event Listener

    const resizerRight = refRight.current;
    resizerRight.addEventListener("mousedown", onMouseDownRightResize);

    const resizerTop = refTop.current;
    resizerTop.addEventListener("mousedown", onMouseDownTopResize);

    const resizerBottom = refBottom.current;
    resizerBottom.addEventListener("mousedown", onMouseDownBottomResize);

    const resizerLeft = refLeft.current;
    resizerLeft.addEventListener("mousedown", onMouseDownLeftResize);

    return () => {
      resizerTop.removeEventListener("mousedown", onMouseDownTopResize);
      resizerBottom.removeEventListener("mousedown", onMouseDownBottomResize);
      resizerLeft.removeEventListener("mousedown", onMouseDownLeftResize);
      resizerRight.removeEventListener("mousedown", onMouseDownRightResize);
    };

  }, []);

  // Effect for Component 2
  useEffect(()=>{
    const resizableElement = refBox2.current;
    const styles = window.getComputedStyle(resizableElement);
    let width = parseInt(styles.width, 10); // 100px -> 100
    let height = parseInt(styles.height, 10); // 100px -> 100

    let xcord = 0;
    let ycord = 0;

    resizableElement.style.top = "0px";
    resizableElement.style.left = "0px";

    // TOP
    const onMouseMoveTopResize = (event) => {
      const dy = event.clientY - ycord;
      height = height - dy;
      ycord = event.clientY;
      resizableElement.style.height = `${height}px`;
    };

    const onMouseUpTopResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveTopResize);
    };

    const onMouseDownTopResize = (event) => {
      ycord = event.clientY;
      const styles = window.getComputedStyle(resizableElement);
      resizableElement.style.bottom = styles.bottom;
      resizableElement.style.top = null;
      document.addEventListener("mousemove", onMouseMoveTopResize);
      document.addEventListener("mouseup", onMouseUpTopResize);
    };

    // Bottom
    const onMouseMoveBottomResize = (event) => {
      const dy = event.clientY - ycord;
      height = height + dy;
      ycord = event.clientY;
      resizableElement.style.height = `${height}px`;
    };

    const onMouseUpBottomResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveBottomResize);
    };

    const onMouseDownBottomResize = (event) => {
      ycord = event.clientY;
      const styles = window.getComputedStyle(resizableElement);
      resizableElement.style.top = styles.top;
      resizableElement.style.bottom = null;
      document.addEventListener("mousemove", onMouseMoveBottomResize);
      document.addEventListener("mouseup", onMouseUpBottomResize);
    };

    // Right
    const onMouseMoveRightResize = (event) => {
      const dx = event.clientX - xcord;
      xcord = event.clientX;
      width = width + dx;
      resizableElement.style.width = `${width}px`;
    };

    const onMouseUpRightResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveRightResize);
    };

    const onMouseDownRightResize = (event) => {
      xcord = event.clientX;
      resizableElement.style.left = styles.left;
      resizableElement.style.right = null;
      document.addEventListener("mousemove", onMouseMoveRightResize);
      document.addEventListener("mouseup", onMouseUpRightResize);
    };

    // Left
    const onMouseMoveLeftResize = (event) => {
      const dx = event.clientX - xcord;
      xcord = event.clientX;
      width = width - dx;
      resizableElement.style.width = `${width}px`;
    };

    const onMouseUpLeftResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveLeftResize);
    };

    const onMouseDownLeftResize = (event) => {
      xcord = event.clientX;
      resizableElement.style.right = styles.right;
      resizableElement.style.left = null;
      document.addEventListener("mousemove", onMouseMoveLeftResize);
      document.addEventListener("mouseup", onMouseUpLeftResize);
    };

    // Mouse Down Event Listener

    const resizerRight = refRight2.current;
    resizerRight.addEventListener("mousedown", onMouseDownRightResize);

    const resizerTop = refTop2.current;
    resizerTop.addEventListener("mousedown", onMouseDownTopResize);

    const resizerBottom = refBottom2.current;
    resizerBottom.addEventListener("mousedown", onMouseDownBottomResize);

    const resizerLeft = refLeft2.current;
    resizerLeft.addEventListener("mousedown", onMouseDownLeftResize);

    return () => {
      resizerTop.removeEventListener("mousedown", onMouseDownTopResize);
      resizerBottom.removeEventListener("mousedown", onMouseDownBottomResize);
      resizerLeft.removeEventListener("mousedown", onMouseDownLeftResize);
      resizerRight.removeEventListener("mousedown", onMouseDownRightResize);
    };

  }, []);

  // Effect for Component 3
  useEffect(()=>{
    const resizableElement = refBox3.current;
    const styles = window.getComputedStyle(resizableElement);
    let width = parseInt(styles.width, 10); // 100px -> 100
    let height = parseInt(styles.height, 10); // 100px -> 100

    let xcord = 0;
    let ycord = 0;

    resizableElement.style.top = "0px";
    resizableElement.style.left = "0px";

    // TOP
    const onMouseMoveTopResize = (event) => {
      const dy = event.clientY - ycord;
      height = height - dy;
      ycord = event.clientY;
      resizableElement.style.height = `${height}px`;
    };

    const onMouseUpTopResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveTopResize);
    };

    const onMouseDownTopResize = (event) => {
      ycord = event.clientY;
      const styles = window.getComputedStyle(resizableElement);
      resizableElement.style.bottom = styles.bottom;
      resizableElement.style.top = null;
      document.addEventListener("mousemove", onMouseMoveTopResize);
      document.addEventListener("mouseup", onMouseUpTopResize);
    };

    // Bottom
    const onMouseMoveBottomResize = (event) => {
      const dy = event.clientY - ycord;
      height = height + dy;
      ycord = event.clientY;
      resizableElement.style.height = `${height}px`;
    };

    const onMouseUpBottomResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveBottomResize);
    };

    const onMouseDownBottomResize = (event) => {
      ycord = event.clientY;
      const styles = window.getComputedStyle(resizableElement);
      resizableElement.style.top = styles.top;
      resizableElement.style.bottom = null;
      document.addEventListener("mousemove", onMouseMoveBottomResize);
      document.addEventListener("mouseup", onMouseUpBottomResize);
    };

    // Right
    const onMouseMoveRightResize = (event) => {
      const dx = event.clientX - xcord;
      xcord = event.clientX;
      width = width + dx;
      resizableElement.style.width = `${width}px`;
    };

    const onMouseUpRightResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveRightResize);
    };

    const onMouseDownRightResize = (event) => {
      xcord = event.clientX;
      resizableElement.style.left = styles.left;
      resizableElement.style.right = null;
      document.addEventListener("mousemove", onMouseMoveRightResize);
      document.addEventListener("mouseup", onMouseUpRightResize);
    };

    // Left
    const onMouseMoveLeftResize = (event) => {
      const dx = event.clientX - xcord;
      xcord = event.clientX;
      width = width - dx;
      resizableElement.style.width = `${width}px`;
    };

    const onMouseUpLeftResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveLeftResize);
    };

    const onMouseDownLeftResize = (event) => {
      xcord = event.clientX;
      resizableElement.style.right = styles.right;
      resizableElement.style.left = null;
      document.addEventListener("mousemove", onMouseMoveLeftResize);
      document.addEventListener("mouseup", onMouseUpLeftResize);
    };

    // Mouse Down Event Listener

    const resizerRight = refRight3.current;
    resizerRight.addEventListener("mousedown", onMouseDownRightResize);

    const resizerTop = refTop3.current;
    resizerTop.addEventListener("mousedown", onMouseDownTopResize);

    const resizerBottom = refBottom3.current;
    resizerBottom.addEventListener("mousedown", onMouseDownBottomResize);

    const resizerLeft = refLeft3.current;
    resizerLeft.addEventListener("mousedown", onMouseDownLeftResize);

    return () => {
      resizerTop.removeEventListener("mousedown", onMouseDownTopResize);
      resizerBottom.removeEventListener("mousedown", onMouseDownBottomResize);
      resizerLeft.removeEventListener("mousedown", onMouseDownLeftResize);
      resizerRight.removeEventListener("mousedown", onMouseDownRightResize);
    };

  }, []);

  return (
    <>
      <h1 className='heading'>Resizeable Divs</h1>
      <div className = "wrapper">
        <div className='column'>
          <div ref={refBox} className = "resizeableBox">
            <div ref = {refLeft} className = "resizer rl"></div>
            <div ref = {refTop} className = "resizer rt"></div>
            <div ref = {refRight} className = "resizer rr"></div>
            <div ref = {refBottom} className = "resizer rb"></div>
            <div>Hi I am Component 1</div>
          </div>
          <div ref={refBox2} className = "resizeableBox2">
              <div ref = {refLeft2} className = "resizer rl"></div>
              <div ref = {refTop2} className = "resizer rt"></div>
              <div ref = {refRight2} className = "resizer rr"></div>
              <div ref = {refBottom2} className = "resizer rb"></div>
              <div>Hi I am Component 2</div>
          </div>
          </div>
          <div className='row'>
            <div ref={refBox3} className = "resizeableBox3">
              <div ref = {refLeft3} className = "resizer rl"></div>
              <div ref = {refTop3} className = "resizer rt"></div>
              <div ref = {refRight3} className = "resizer rr"></div>
              <div ref = {refBottom3} className = "resizer rb"></div>
              <div>Hi I am Component 3</div>
            </div>
          </div>
      </div>
    </>
  );
}

export default App;
