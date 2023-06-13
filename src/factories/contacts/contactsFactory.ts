import { Factory } from "fishery";
import { faker } from "@faker-js/faker";
import { ContactStructure } from "../../types";

const contactFactory = Factory.define<ContactStructure>(() => ({
  id: faker.database.mongodbObjectId().toString(),
  name: faker.person.firstName(),
  surname: faker.person.lastName(),
  phoneNumber: {
    mobile: "+34 000 000 000",
  },
  address: faker.location.streetAddress(),
  avatar: "https://ui-avatars.com/api/?name=A+A",
  birthday: faker.date.birthdate().toJSON(),
  email: faker.internet.email(),
  socials: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  user: "646f6a0da1b8a16b45eabf43",
}));

export const contactMock = contactFactory.build();

export const contactsMock = contactFactory.buildList(10);
