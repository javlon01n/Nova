import MemberModel from "../schema/Member.model"
import { GoogleLoginInput, LoginInput, Member, MemberInput, MemberUpdateInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { MemberStatus, MemberType } from "../libs/enums/member.enum";
import * as bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { shapeIntoMongooseObjectId } from "../libs/config";

class MemberService {
    [x: string]: any;
  
    private readonly memberModel;


    constructor() {
       this.memberModel = MemberModel;
    }

     /** SPA */

    public async getRestaurant(): Promise<Member> {
        const result = await this.memberModel
        .findOne({ memberType: MemberType.RESTAURANT })
        .exec();
        if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

        return result as unknown as Member;
    }
}