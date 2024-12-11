Score : $400$ points

## Problem Statement

Takahashi will encounter $N$ monsters in order. The $i$-th monster $(1\leq i\leq N)$ has a strength of $A_i$.

For each monster, he can choose to either let it go or defeat it.<br>
Each action awards him experience points as follows:

- If he lets a monster go, he gains $0$ experience points.
- If he defeats a monster with strength $X$, he gains $X$ experience points.<br>
  If it is an even-numbered defeated monster (2nd, 4th, ...), he gains an additional $X$ experience points.

Find the maximum total experience points he can gain from the $N$ monsters.

## Constraints

- $1\leq N\leq 2\times 10^5$
- $1\leq A_i\leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the maximum total experience points he can gain from the $N$ monsters as an integer.

```input1
5
1 5 3 2 7
```

```output1
28
```

If Takahashi defeats the 1st, 2nd, 3rd, and 5th monsters, and lets the 4th monster go, he gains experience points as follows:

- Defeats a monster with strength $A_1=1$. He gains $1$ experience point.
- Defeats a monster with strength $A_2=5$. He gains $5$ experience points. As it is the 2nd defeated monster, he gains an additional $5$ points.
- Defeats a monster with strength $A_3=3$. He gains $3$ experience points.
- Lets the 4th monster go. Takahashi gains no experience points.
- Defeats a monster with strength $A_5=7$. He gains $7$ experience points. As it is the 4th defeated monster, he gains an additional $7$ points.

Therefore, in this case, he gains $1+(5+5)+3+0+(7+7)=28$ experience points.<br>
Note that even if he encounters a monster, if he lets it go, it does not count as defeated.

He can gain at most $28$ experience points no matter how he acts, so print $28$.<br>
As a side note, if he defeats all monsters in this case, he would gain $1+(5+5)+3+(2+2)+7=25$ experience points.

```input2
2
1000000000 1000000000
```

```output2
3000000000
```

Beware that the answer may not fit in a $32$-bit integer.