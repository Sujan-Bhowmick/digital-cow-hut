import { IAdmin } from "./admin.interface";
import { Admin } from "./admin.model";


const createAdmin = async(payload: IAdmin):Promise<IAdmin | null> => {
  const result  = Admin.create(payload)
  return result
};

export const AdminService = {
  createAdmin
}