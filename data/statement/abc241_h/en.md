Score : $600$ points

## Problem Statement

There are some cards.  Each card has one of $N$ integers written on it.
Specifically, there are $B_i$ cards with $A_i$ written on them.<br>
Next, for a combination of $M$ cards chosen out of these $(B_1+B_2\cdots +B_N)$ cards, 
we define the score of the combination by the product of the integers written on the $M$ cards.<br>
Supposed that cards with the same integer written on them are indistinguishable,
find the sum, modulo $998244353$, of the scores over all possible combinations of $M$ cards.

## Constraints

- $1 \leq N \leq 16$
- $1 \leq M \leq 10^{18}$
- $1 \leq A_i &lt; 998244353$
- $1 \leq B_i \leq 10^{17}$
- If $i\neq j$, then $A_i \neq A_j$.
- $M\leq B_1+B_2+\cdots B_N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$
> 
> $A_N$ $B_N$

## Output

Print the answer.

```input1
3 3
3 1
5 2
6 3
```

```output1
819
```

There are $6$ possible combinations of $3$ cards.

- A combination of $1$ card with $3$ written on it, and $2$ cards with $5$ written on them.
- A combination of $1$ card with $3$ written on it, $1$ card with $5$ written on it, and $1$ card with $6$ written on it.
- A combination of $1$ card with $3$ written on it, and $2$ cards with $6$ written on them.
- A combination of $2$ cards with $5$ written on them, and $1$ card with $6$ written on it.
- A combination of $1$ card with $5$ written on it, and $2$ cards with $6$ written on them.
- A combination of $3$ cards with $6$ written on them.

The scores are $75$, $90$, $108$, $150$, $180$, and $216$, respectively, for a sum of $819$.

```input2
3 2
1 1
5 2
25 1
```

```output2
180
```

"A combination of a card with $1$ and another card with $25$" and "a combination of two cards with $5$ written on them" have the same score of $25$, but they are considered to be different combinations.

```input3
10 232657150901347497
139547946 28316250877914575
682142538 78223540024979445
110643588 74859962623690081
173455495 60713016476190629
271056265 85335723211047202
801329567 48049062628894325
864844366 54979173822804784
338794337 69587449430302156
737638908 15812229161735902
462149872 49993004923078537
```

```output3
39761306
```

Be sure to print the answer modulo $998244353$.