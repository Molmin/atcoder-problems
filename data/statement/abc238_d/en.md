Score : $400$ points

## Problem Statement

Solve the following problem for $T$ test cases.

Given are non-negative integers $a$ and $s$. Is there a pair of non-negative integers $(x,y)$ that satisfies both of the conditions below?

- $x\ \text{AND}\ y=a$
- $x+y=s$

    
        What is bitwise $\mathrm{AND}$?
    
    

        The bitwise $\mathrm{AND}$ of integers $A$ and $B$, $A\ \mathrm{AND}\ B$, is defined as follows:
        

- When $A\ \mathrm{AND}\ B$ is written in base two, the digit in the $2^k$'s place ($k \geq 0$) is $1$ if those of $A$ and $B$ are **both** $1$, and $0$ otherwise.

        For example, we have $4\ \mathrm{AND}\ 6 = 4$ (in base two: $100\ \mathrm{AND}\ 110 = 100$).  
    

## Constraints

- $1 \leq T \leq 10^5$
- $0 \leq a,s \lt 2^{60}$
- All values in input are integers.

## Input

Input is given from Standard Input. The first line is in the following format:

> $T$

Then, $T$ test cases follow. Each test case is in the following format:

> $a$ $s$

## Output

Print $T$ lines. The $i$-th line $(1 \leq i \leq T)$ should contain `Yes` if, in the $i$-th test case, there is a pair of non-negative integers $(x,y)$ that satisfies both of the conditions in the Problem Statement, and `No` otherwise.

```input1
2
1 8
4 2
```

```output1
Yes
No
```

In the first test case, some pairs such as $(x,y)=(3,5)$ satisfy the conditions.

In the second test case, no pair of non-negative integers satisfies the conditions.

```input2
4
201408139683277485 381410962404666524
360288799186493714 788806911317182736
18999951915747344 451273909320288229
962424162689761932 1097438793187620758
```

```output2
No
Yes
Yes
No
```