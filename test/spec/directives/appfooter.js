'use strict';

describe('Directive: appFooter', function () {

  // load the directive's module
  beforeEach(module('odaChallengeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<app-footer></app-footer>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the appFooter directive');
  }));
});
