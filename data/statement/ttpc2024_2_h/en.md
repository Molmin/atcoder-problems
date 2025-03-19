Score: $100$ points

    blockquote {
        color: gray;
    }

Let’s consider abbreviating a programming contest held once a year using a sequence of four uppercase English letters. This year's abbreviation is `TTPC`!

## Problem Statement

The abbreviation-deciding machine $\mathrm{M}$ for a programming contest has a string $S$ of length $N$ consisting of uppercase English letters and an integer sequence $A = (A_1, A_2, \dots, A_N)$ of length $N$.<br>
Additionally, machine $\mathrm{M}$ has four cursors numbered from $1$ to $4$ for pointing at characters in $S$. Initially, for each $i = 1, 2, 3, 4$, cursor $i$ points to the $x_i$-th character of $S$.

The machine $\mathrm{M}$ has two buttons: the **Abbreviation Button** and the **Update Button**. Pressing these buttons triggers the following actions:

- **Abbreviation Button**: Machine $\mathrm{M}$ outputs a string of length $4$ formed by concatenating the characters pointed to by cursors $1, 2, 3, 4$ in this order.
- **Update Button**: For each $i = 1, 2, 3, 4$, the following happens:-   - Let $y$ be the current position of cursor $i$. Cursor $i$ moves from the $y$-th character of $S$ to the $A_y$-th character of $S$.

This year's programming contest abbreviation was determined by pressing the Abbreviation Button, resulting in `TTPC`. Here, "this year" refers to $0$ years from now.

Starting from next year, the abbreviation for the programming contest each year will be obtained through the following steps:

1. Press the update button.
2. Press the abbreviation button to determine the abbreviation.

How many years from now will the abbreviation return to `TTPC` for the last time? Will the end of `TTPC` come?

## Constraints

- $N, A_i, x_1, x_2, x_3, x_4$ are integers.
- $3 \leq N \leq 50$
- $S$ is a string of length $N$ consisting of uppercase English letters.
- $1 \leq A_i \leq N\ (1 \leq i \leq N)$
- $1 \leq x_1, x_2, x_3, x_4 \leq N$
- $S_{x_1} = {}$`T`
- $S_{x_2} = {}$`T`
- $S_{x_3} = {}$`P`
- $S_{x_4} = {}$`C`

## Input

The input is given in the following format:

> $N$
> 
> $S$
> 
> $A_1$ $A_2$ $\dots$ $A_N$
> 
> $x_1$ $x_2$ $x_3$ $x_4$

## Output

Output a non-negative integer $k$ satisfying the following conditions. If such a $k$ does not exist, output `NeverEnds` instead.

- The abbreviation becomes `TTPC` $k$ years from now.
- For any integer $l &gt; k$, the abbreviation does not become `TTPC` $l$ years from now.

```input1
5
TTTPC
2 3 4 4 5
1 2 4 5
```

```output1
1
```

- $0$ years from now, the abbreviation is `TTPC`, and the cursor positions are $(1,2,4,5)$.
- $1$ year from now, the abbreviation is `TTPC`, and the cursor positions are $(2,3,4,5)$.
- $2$ years from now, the abbreviation is `TPPC`, and the cursor positions are $(3,4,4,5)$.
- $3$ years from now, the abbreviation is `PPPC`, and the cursor positions are $(4,4,4,5)$.

The last time the abbreviation becomes `TTPC` is 1 year from now.

```input2
4
TTPC
2 3 4 1
1 2 3 4
```

```output2
NeverEnds
```

The abbreviation becomes `TTPC` at years $0, 4, 8, 12, \dots$ and so on. `TTPC` never ends.

```input3
6
TTPCZT
5 3 2 6 4 4
1 2 3 4
```

```output3
0
```