# Quick Start Guide - NextAuth Setup

## ⚡ 5-Minute Setup

### Step 1: Generate Secret
```bash
openssl rand -hex 32
```

### Step 2: Create .env.local
Copy `.env.local.example` to `.env.local` and fill in:

```env
NEXTAUTH_SECRET=your-generated-secret-here
NEXTAUTH_URL=http://localhost:3000
```

### Step 3: Start Development Server
```bash
pnpm dev
```

### Step 4: Test Authentication
- **Sign Up**: http://localhost:3000/signup
- **Sign In**: http://localhost:3000/login (use test@example.com / password123)
- **Dashboard**: http://localhost:3000/dashboard (protected route)

## 📁 Project Structure

```
NextAuth Setup includes:
├── Authentication Flow
│   ├── Login/Signup Forms with Animations
│   ├── Session Management
│   ├── Protected Routes
│   └── Error Handling
│
├── Database Ready
│   ├── Mongoose models prepared
│   ├── User creation API ready
│   └── Password hashing ready (bcryptjs installed)
│
└── Security Features
    ├── HTTP-only cookies
    ├── CSRF protection
    ├── JWT strategy
    └── Route middleware
```

## 🔧 Important Files

| File | Purpose |
|------|---------|
| `src/lib/auth.config.ts` | NextAuth configuration |
| `middleware.ts` | Route protection rules |
| `src/hooks/useAuth.ts` | Custom auth hook for components |
| `src/features/auth/_components/*` | Login/Signup forms |
| `src/app/dashboard/page.tsx` | Protected page example |

## 🚀 Integration Steps

### 1. Connect to Database
Update `src/lib/auth.config.ts` `authorize()` function:

```typescript
// Find user from database
const user = await db.user.findUnique({ where: { email } });
if (!user) throw new Error('User not found');

// Compare hashed password
const isValid = await bcrypt.compare(password, user.password);
if (!isValid) throw new Error('Invalid password');
```

### 2. Implement Signup
Update `src/app/api/auth/signup/route.ts`:

```typescript
// Hash password
const hashedPassword = await bcrypt.hash(password, 10);

// Create user in database
const user = await db.user.create({
  data: {
    name: fullName,
    email,
    password: hashedPassword,
  },
});
```

### 3. Use in Components
```tsx
import { useAuth } from '@/hooks/useAuth';

export function MyComponent() {
  const { user, logout, isAuthenticated } = useAuth();
  
  if (!isAuthenticated) return <p>Please sign in</p>;
  
  return (
    <>
      <p>Hello, {user?.name}</p>
      <button onClick={logout}>Logout</button>
    </>
  );
}
```

## 🔐 Security Checklist

- [ ] Generated unique `NEXTAUTH_SECRET`
- [ ] Set `NEXTAUTH_URL` to production domain
- [ ] Implemented password hashing with bcrypt
- [ ] Connected to secure database
- [ ] Added HTTPS in production
- [ ] Tested CSRF protection
- [ ] Verified route middleware works

## 📚 Resources

- [NextAuth.js Docs](https://next-auth.js.org)
- [Full Setup Guide](NEXTAUTH_SETUP.md)
- [Zod Validation](https://zod.dev)
- [React Hook Form](https://react-hook-form.com)

## 💡 Demo Credentials

Test the current setup with:
- **Email**: test@example.com
- **Password**: password123

(Update this in `src/lib/auth.config.ts` after connecting to real database)

## ⚠️ Common Issues

**"NEXTAUTH_SECRET is not defined"**
→ Make sure `.env.local` exists with `NEXTAUTH_SECRET`

**"Session not persisting"**
→ Verify `AuthProvider` wraps entire app in `src/app/layout.tsx`

**"Login fails"**
→ Check `src/lib/auth.config.ts` credentials validation logic

**"Routes not protected"**
→ Verify `middleware.ts` matcher paths are correct

## 🎯 Next Features to Add

1. **Email Verification**
   - Send verification emails
   - Implement email confirmation flow

2. **Password Reset**
   - Forgot password page
   - Reset token validation

3. **OAuth Providers**
   - GitHub login
   - Google login

4. **Multi-Factor Authentication**
   - TOTP setup
   - Recovery codes

5. **User Profile**
   - Edit profile page
   - Avatar upload
   - Account settings
