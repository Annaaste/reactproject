import { getFirestore } from 'firebase-admin/firestore';
import { cert, initializeApp } from 'firebase-admin/app';

const apps = getApps()

const app = apps.length
  ? apps[0]
  : initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
      /*projectId: 'ingriisearchresults',
      clientEmail: 'firebase-adminsdk-fop3b@ingriisearchresults.iam.gserviceaccount.com',
      privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDd9u9apclrQX+g\nCpOWVyrjZknTkFy3FBBsZmlj9lACl/cWJ1fh1+Hbpad948/drtngNIhId55vRNHM\nkFKpRjT7dRwGuW9HKtGdcO79DR65xo3OhOn1gXQkDStu1YKt/uxre8kW+W3FTP0K\ncX+CRSzP907wfsLNtzUr/PIjVzyLvk76ngZWlyhL5RCLhrmd663zz2x7zgP9IiAe\nqXj8lRgEbdA13PoTuTTy5kcPhQOlQG0L/+Z/alGYZ09SEwoO9HHcn4Fki2SmwGZZ\nZLweLRy8aiOdpcafSZBnDLNhqWCa0A85qtjrIhnfL4P2ZHaNesHxomdhw4mpA5Wt\nHuVd6OZLAgMBAAECggEACUzhdpDfwai66j/HM1NvrpuImF7CI8GpdoFMBS466ADq\nD3mSixn6krN8MyAqg4ViB6zr0O2CK/NcPxAFBqa0bZzYkcePTBIVOl2TBfNYyDvz\nkSWsj+besOwEV96GXTgDO/Wx1U6aNNwm9hsPVqwDVqtsGVOWYfw9NByjIKv1E33P\n41FPdkuj44LlfHYpXd7KIR/nhXTcOHcWYsX+bjVYP1kGrgeAAxug5bFSc2GDvHo9\nRZJAtaJcLNj8oYe9DV4F+sLWHyHa1uBH96UwE0Oelwvx211QWEbgXcjzumXGvote\nRN1MAeZNFcpwVLbM+VsfOXPp1aSQghkib4ubi8wkEQKBgQDwJ3zNP0GnGnwY2H+G\nVB/1AuxyJ5BFsL55KbTuuJw/nYZRkOowF8Jhn+tRgYM28oq5FvTMQw8twQCUjKs6\npppOPcO1a3EE+sc8/CoEWczVWbuKinld0VF+N23fLmfhnrqEFlaDol3PYRrbdmlp\ncqpKjtaFB7VP/3zt9l0BmrfDnQKBgQDsnDNsN00Y28FA2UipT1/z3jz5dNW7kIJW\nbBA1mNRCDmglDGm9/pumRAsq0JLxPl2It76hbLvtSNfEypd85G32zHaoLU/jbQi+\nuEwVgsXoyqxGuiBRKcbJmBkAQ4YBGVjG971pT0OL7c95CIuU0/QGV4DPX/wgDm4u\nFUj3ZT+xBwKBgAWR5OMdxHgLtTUeUFbdPKCCINnE8SOspb5JqVigD3+qN6NMqSHU\naz24Z8zMJC7yESWZ0rOqGoAFKe5IFPCXTJzj8dYTV9u1tUlEz/Sp4IZSPndIHuh+\nIlW7E2FJwj8JX2oQ2pDTAzn8FpNge7FmZ2yzQ2Zyd1ITquIaBK402G5BAoGBANBF\nzp37L8op5jqHCQa/795iSZnr1hd8ZL5d8Qa8uFpNBC9YddvgOnJogsv1PONN2ld2\nJj9Bz0pXTFbVXfN5v7H22JvBBwlR+NiosZBdxIfdnzfCrp/C/lCFqbwps9NT1GmP\nuRLxyqtpca9Abl1bFPpgG+puuygci6/U3J2oaiARAoGBAND2Cbtv0vUc67+oRZEd\niQWtnv1LumMDATb0I1xESHeXOvze8/R7N25zkQCMKaTk/zwNt5NU2ZOTQH/SS2ib\nv4O6IivkKf7QkBD384zzX02zXlqekhy2uKPQ4FuLzerzIKlUm4L3gfAyTidDTf4Y\n1k/GqyT5ZEFx4535r9VbtPHS\n-----END PRIVATE KEY-----\n'*/
    }),
  });

export const firestore = getFirestore(app)