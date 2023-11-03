import bcrypt from "bcrypt";
const SALT_WORK_FACTOR = 10;

export async function cryptPassword(this: any, next: any) {
  try {
    if (!this.isModified("password")) return next();

    this.password = await hashPassword(this.password);
    next();
  } catch (error) {
    return next(error);
  }
}

export async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
  const hash = await bcrypt.hash(password, salt);
  return hash;
}

export async function verifyPassword(
    this: any,
    suggestedPassword: string
  ) {
    const isMatch = await bcrypt.compare(suggestedPassword, this.password);
    return isMatch;
  };
    