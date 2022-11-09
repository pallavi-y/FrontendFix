import { AdminService } from "./admin.service";
import {HttpClientTestingModule,HttpTestingController} from "@angular/common/http/testing"
import { TestBed, inject} from "@angular/core/testing";
import { of } from "rxjs";
import { Employee } from "../models/employee";

describe('AdminService',()=>{

    let adminService :AdminService;
    let httpTestingController :HttpTestingController;

    let mockHttpClient:any;
    let mockMessageService:any;
    let mockPickUpData:any;
    let mockRideData:any;


    beforeEach(function(){
        TestBed.configureTestingModule({imports:[HttpClientTestingModule]});
        httpTestingController = TestBed.get(HttpClientTestingModule);
        adminService = new AdminService(mockHttpClient);
        mockPickUpData=[
            {puid: '1234',email:'abc@eurofins.com',phoneNumber:9832743242,landMark:'Electronic',assigned_ride_no:1},
            {puid: '1284',email:'abcd@eurofins.com',phoneNumber:9832563242,landMark:'BTM',assigned_ride_no:3}
          
        ];
        mockRideData=[
            {Ride_id: '1234',driver:'Keshav'},
            {Ride_id: '1235',driver:'Rahul'}
        ];


    });

    beforeEach(inject(
        [AdminService],(service:AdminService)=>{
            adminService=service;
        }
    ));

    it('Get Employee Pick Up Data Test',()=>{
        
        let response:any[]=[];
        spyOn(adminService,'getEmployeePickUpDetails').and.returnValue(of(mockPickUpData));
        adminService.getEmployeePickUpDetails().subscribe(res =>{response= res})
        expect(response).toEqual(mockPickUpData);
    });




    it('Get Employee Drop Data Test',()=>{
     
        let mockData:any[] =[];
        let statusCode:any
        let response:any[]=[];
        const req = 
        spyOn(adminService,'addDriver').and.returnValue(of(mockPickUpData));
        adminService.addDriver(mockData).subscribe(res =>{response= res})
        expect(response).toEqual(mockPickUpData);
    });

    
    it('Get Available PickUp Rides Test',()=>{
     
        let statusCode:any
        let response:any[]=[];
       
        spyOn(adminService,'getAvailablePickUpRides').and.returnValue(of(mockRideData));
        adminService.getAvailablePickUpRides().subscribe(res =>{response= res})
        expect(response).toEqual(mockRideData);
    });

    it('Get Available Drop Rides Test',()=>{
      
       
        let statusCode:any
        let response:any[]=[];
        spyOn(adminService,'getAvailableDropRides').and.returnValue(of(mockRideData));
        adminService.getAvailableDropRides().subscribe(res =>{response= res})
        expect(response).toEqual(mockRideData);
    });
   
})