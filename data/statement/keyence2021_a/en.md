Score : $300$ points

## Problem Statement

Snuke has two number sequences $a$ and $b$, each of length $N$.
The $i$-th number of $a$ is $a_i$, and that of $b$ is $b_i$.

Using these sequences, he has decided to make a new sequence $c$ of length $N$.
For each $n$ such that $1 \leq n \leq N$, $c_n$, the $n$-th number of $c$, is the maximum value of $a_i b_j$ for a pair $(i,j)$ such that $1 \leq i \leq j \leq n$. Formally, we have $c_n = \max_{1 \leq i \leq j \leq n} a_{i}b_{j}$.

Find $c_1, c_2, \ldots, c_{N}$.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 2 \times 10^{5}$
- $1 \leq a_i, b_i \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_{1}$ $a_{2}$ $\cdots$ $a_{N}$
> 
> $b_{1}$ $b_{2}$ $\cdots$ $b_{N}$

## Print

Print $N$ lines. The $n$-th line from the top should contain $c_{n}$.

```input1
3
3 2 20
1 4 1
```

```output1
3
12
20
```

We have:

- $c_{1} = \max(a_{1}b_{1}) = 3$;
- $c_{2} = \max(a_{1}b_{1}, a_{1}b_{2},a_{2}b_{2}) = 12$;
- $c_{3} = \max(a_{1}b_{1}, a_{1}b_{2}, a_{1}b_{3}, a_{2}b_{2},a_{2}b_{3},a_{3}b_{3}) = 20$.

```input2
20
715806713 926832846 890153850 433619693 890169631 501757984 778692206 816865414 50442173 522507343 546693304 851035714 299040991 474850872 133255173 905287070 763360978 327459319 193289538 140803416
974365976 488724815 821047998 371238977 256373343 218153590 546189624 322430037 131351929 768434809 253508808 935670831 251537597 834352123 337485668 272645651 61421502 439773410 621070911 578006919
```

```output2
697457706539596888
697457706539596888
760974252688942308
760974252688942308
760974252688942308
760974252688942308
760974252688942308
760974252688942308
760974252688942308
760974252688942308
760974252688942308
867210459214915026
867210459214915026
867210459214915026
867210459214915026
867210459214915026
867210459214915026
867210459214915026
867210459214915026
867210459214915026
```