// components/Breadcrumbs.js

import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { ThemeColor } from '../theme/color';
import { fontSize } from '../theme/fontsize';
import { fontWeight } from '../theme/fontWeight';

const CustomBreadcrumbs = () => {
  const router = useRouter();
  const pathnames = router.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      <Link href="/" passHref style={{textDecoration:"none"}}>
        <Typography color={ThemeColor.LIGHTBLUE} fontSize={fontSize.h4.medium} fontWeight={fontWeight.W400}>Home</Typography>
      </Link>
      {pathnames.map((value, index) => {
        const isLast = index === pathnames.length - 1;
        const href = `/${pathnames.slice(0, index + 1).join('/')}`;

        return isLast ? (
          <Typography color={ThemeColor.BLACK} fontSize={fontSize.h4.medium} fontWeight={fontWeight.W400} key={href}>
            {value}
          </Typography>
        ) : (
          <Link href={href} key={href} passHref style={{textDecoration:"none"}}>
            <Typography color={ThemeColor.LIGHTBLUE} fontSize={fontSize.h4.medium} fontWeight={fontWeight.W400}>{value}</Typography>
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
