Score : $400$ points

## Problem Statement

A university student, Takahashi, has to take $N$ examinations and pass all of them.
Currently, his *readiness* for the $i$-th examination is $A_{i}$, and according to his investigation, it is known that he needs readiness of at least $B_{i}$ in order to pass the $i$-th examination.

Takahashi thinks that he may not be able to pass all the examinations, and he has decided to ask a magician, Aoki, to change the readiness for as few examinations as possible so that he can pass all of them, while not changing the total readiness.

For Takahashi, find the minimum possible number of indices $i$ such that $A_i$ and $C_i$ are different, for a sequence $C_1, C_2, ..., C_{N}$ that satisfies the following conditions:

- The sum of the sequence $A_1, A_2, ..., A_{N}$ and the sum of the sequence $C_1, C_2, ..., C_{N}$ are equal.
- For every $i$, $B_i \leq C_i$ holds.

If such a sequence $C_1, C_2, ..., C_{N}$ cannot be constructed, print $-1$.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq A_i \leq 10^9$
- $1 \leq B_i \leq 10^9$
- $A_i$ and $B_i$ are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $...$ $A_{N}$
> 
> $B_1$ $B_2$ $...$ $B_{N}$

## Output

Print the minimum possible number of indices $i$ such that $A_i$ and $C_i$ are different, for a sequence $C_1, C_2, ..., C_{N}$ that satisfies the conditions.
If such a sequence $C_1, C_2, ..., C_{N}$ cannot be constructed, print $-1$.

```input1
3
2 3 5
3 4 1
```

```output1
3
```

$(A_1, A_2, A_3) = (2, 3, 5)$ and $(B_1, B_2, B_3) = (3, 4, 1)$. If nothing is done, he cannot pass the first and second exams.
The minimum possible number of indices $i$ such that $A_i$ and $C_i$ are different, $3$, is achieved when:

- $(C_1, C_2, C_3) = (3, 5, 2)$

```input2
3
2 3 3
2 2 1
```

```output2
0
```

In this case, he has to do nothing in order to pass all the exams.

```input3
3
17 7 1
25 6 14
```

```output3
-1
```

In this case, no matter what is done, he cannot pass all the exams.

```input4
12
757232153 372327760 440075441 195848680 354974235 458054863 463477172 740174259 615762794 632963102 529866931 64991604
74164189 98239366 465611891 362739947 147060907 118867039 63189252 78303147 501410831 110823640 122948912 572905212
```

```output4
5
```