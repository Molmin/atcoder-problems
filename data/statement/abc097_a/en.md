Score : $100$ points

## Problem Statement

Three people, A, B and C, are trying to communicate using transceivers.
They are standing along a number line, and the coordinates of A, B and C are $a$, $b$ and $c$ (in meters), respectively.
Two people can directly communicate when the distance between them is at most $d$ meters.
Determine if A and C can communicate, either directly or indirectly.
Here, A and C can indirectly communicate when A and B can directly communicate and also B and C can directly communicate.

## Constraints

- $1$ $\leq$ $a,b,c$ $\leq$ $100$
- $1$ $\leq$ $d$ $\leq$ $100$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $a$ $b$ $c$ $d$

## Output

If A and C can communicate, print `Yes`; if they cannot, print `No`.

```input1
4 7 9 3
```

```output1
Yes
```

A and B can directly communicate, and also B and C can directly communicate, so we should print `Yes`.

```input2
100 10 1 2
```

```output2
No
```

They cannot communicate in this case.

```input3
10 10 10 1
```

```output3
Yes
```

There can be multiple people at the same position.

```input4
1 100 2 10
```

```output4
Yes
```