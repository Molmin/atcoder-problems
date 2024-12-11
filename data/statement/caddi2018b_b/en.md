Score : $200$ points

## Problem Statement

There are $N$ rectangular plate materials made of special metal called AtCoder Alloy.
The dimensions of the $i$-th material are $A_i \times B_i$ ($A_i$ vertically and $B_i$ horizontally).

Takahashi wants a rectangular plate made of AtCoder Alloy whose dimensions are exactly $H \times W$.
He is trying to obtain such a plate by choosing one of the $N$ materials and cutting it if necessary.
When cutting a material, the cuts must be parallel to one of the sides of the material.
Also, the materials have fixed directions and cannot be rotated.
For example, a $5 \times 3$ material cannot be used as a $3 \times 5$ plate.

Out of the $N$ materials, how many can produce an $H \times W$ plate if properly cut?

## Constraints

- $1 \leq N \leq 1000$
- $1 \leq H \leq 10^9$
- $1 \leq W \leq 10^9$
- $1 \leq A_i \leq 10^9$
- $1 \leq B_i \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$ $H$ $W$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $:$
> 
> $A_N$ $B_N$

## Output

Print the answer.

```input1
3 5 2
10 3
5 2
2 5
```

```output1
2
```

Takahashi wants a $5 \times 2$ plate.

- The dimensions of the first material are $10 \times 3$. We can obtain a $5 \times 2$ plate by properly cutting it.
- The dimensions of the second material are $5 \times 2$. We can obtain a $5 \times 2$ plate without cutting it.
- The dimensions of the third material are $2 \times 5$. We cannot obtain a $5 \times 2$ plate, whatever cuts are made. Note that the material cannot be rotated and used as a $5 \times 2$ plate.

```input2
10 587586158 185430194
894597290 708587790
680395892 306946994
590262034 785368612
922328576 106880540
847058850 326169610
936315062 193149191
702035777 223363392
11672949 146832978
779291680 334178158
615808191 701464268
```

```output2
8
```