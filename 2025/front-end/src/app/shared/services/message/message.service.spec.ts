import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

describe('MessageService', () => {
  let service: MessageService;
  let toastrServiceSpy: jasmine.SpyObj<ToastrService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ToastrService', ['error']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [{ provide: ToastrService, useValue: spy }]
    });
    service = TestBed.inject(MessageService);
    toastrServiceSpy = TestBed.inject(ToastrService) as jasmine.SpyObj<ToastrService>;

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call ToastrService.error with the correct arguments', () => {
    // Arrange
    const mockError = new HttpErrorResponse({ status: 500, statusText: 'Internal Server Error', error: 'Server Error' });

    // Act
    service.showApiError(mockError);

    // Assert
    expect(toastrServiceSpy.error).toHaveBeenCalledWith(mockError.message, 'API Error', { timeOut: 3000 });
  });
});
