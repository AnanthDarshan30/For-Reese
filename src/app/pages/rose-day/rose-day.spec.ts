import { ComponentFixture, TestBed } from "@angular/core/testing";

import { RoseDay } from "./rose-day";

describe("RoseDay", () => {
  let component: RoseDay;
  let fixture: ComponentFixture<RoseDay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoseDay],
    }).compileComponents();

    fixture = TestBed.createComponent(RoseDay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
