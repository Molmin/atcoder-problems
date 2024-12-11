Score : $350$ points

## Problem Statement

Snuke the doctor prescribed $N$ kinds of medicine for Takahashi.  For the next $a_i$ days (including the day of the prescription), he has to take $b_i$ pills of the $i$-th medicine.  He does not have to take any other medicine.

Let the day of the prescription be day $1$.  On or after day $1$, when is the first day on which he has to take $K$ pills or less?

## Constraints

- $1 \leq N \leq 3 \times 10^5$
- $0 \leq K \leq 10^9$
- $1 \leq a_i,b_i \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $a_1$ $b_1$
> 
> $\vdots$
> 
> $a_N$ $b_N$

## Output

If Takahashi has to take $K$ pills or less on day $X$ for the first time on or after day $1$, print $X$.

```input1
4 8
6 3
2 5
1 9
4 2
```

```output1
3
```

On day $1$, he has to take $3,5,9$, and $2$ pills of the $1$-st, $2$-nd, $3$-rd, and $4$-th medicine, respectively.  In total, he has to take $19$ pills on this day, which is not $K(=8)$ pills or less.<br>
On day $2$, he has to take $3,5$, and $2$ pills of the $1$-st, $2$-nd, and $4$-th medicine, respectively.  In total, he has to take $10$ pills on this day, which is not $K(=8)$ pills or less.<br>
On day $3$, he has to take $3$ and $2$ pills of the $1$-st and $4$-th medicine, respectively.  In total, he has to take $5$ pills on this day, which is $K(=8)$ pills or less for the first time.  

Thus, the answer is $3$.

```input2
4 100
6 3
2 5
1 9
4 2
```

```output2
1
```

```input3
15 158260522
877914575 2436426
24979445 61648772
623690081 33933447
476190629 62703497
211047202 71407775
628894325 31963982
822804784 50968417
430302156 82631932
161735902 80895728
923078537 7723857
189330739 10286918
802329211 4539679
303238506 17063340
492686568 73361868
125660016 50287940
```

```output3
492686569
```