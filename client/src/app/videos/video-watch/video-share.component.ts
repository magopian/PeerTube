import { Component, Input, ViewChild } from '@angular/core';

import { ModalDirective } from 'ng2-bootstrap/components/modal';

import { Video } from '../shared';

@Component({
  selector: 'my-video-share',
  templateUrl: './video-share.component.html'
})
export class VideoShareComponent {
  @Input() video: Video = null;

  @ViewChild('modal') modal: ModalDirective;

  constructor() {
    // empty
  }

  show() {
    this.modal.show();
  }

  hide() {
    this.modal.hide();
  }

  getVideoIframeCode() {
    return '<iframe width="560" height="315" ' +
           'src="' + window.location.origin + '/videos/embed/' + this.video.id + '" ' +
           'frameborder="0" allowfullscreen>' +
           '</iframe>';
  }

  getVideoUrl() {
    return window.location.href;
  }

  notSecure() {
    return window.location.protocol === 'http:';
  }
}
