Score : $300$ points

## Problem Statement

We have an empty box.<br>
Takahashi can cast the following two spells any number of times in any order.

- Spell $A$: puts one new ball into the box.
- Spell $B$: doubles the number of balls in the box.

Tell us a way to have exactly $N$ balls in the box with **at most $\mathbf{120}$ casts** of spells.<br>
It can be proved that there always exists such a way under the Constraints given.

There is no way other than spells to alter the number of balls in the box.

## Constraints

- $1 \leq N \leq 10^{18}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print a string $S$ consisting of `A` and `B`.
The $i$-th character of $S$ should represent the spell for the $i$-th cast.

$S$ must have **at most $\mathbf{120}$** characters.

```input1
5
```

```output1
AABA
```

This changes the number of balls as follows: $0 \xrightarrow{A} 1\xrightarrow{A} 2 \xrightarrow{B}4\xrightarrow{A} 5$.<br>
There are also other acceptable outputs, such as `AAAAA`.

```input2
14
```

```output2
BBABBAAAB
```

This changes the number of balls as follows: $0 \xrightarrow{B} 0 \xrightarrow{B} 0 \xrightarrow{A}1 \xrightarrow{B} 2 \xrightarrow{B} 4 \xrightarrow{A}5 \xrightarrow{A}6 \xrightarrow{A} 7 \xrightarrow{B}14$.<br>
It is not required to minimize the length of $S$.