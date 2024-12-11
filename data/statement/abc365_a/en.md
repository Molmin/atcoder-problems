Score : $100$ points

## Problem Statement

You are given an integer $Y$ between $1583$ and $2023$.

Find the number of days in the year $Y$ of the Gregorian calendar.

Within the given range, the year $Y$ has the following number of days:

- <p>if $Y$ is not a multiple of $4$, then $365$ days;</p>
- <p>if $Y$ is a multiple of $4$ but not a multiple of $100$, then $366$ days;</p>
- <p>if $Y$ is a multiple of $100$ but not a multiple of $400$, then $365$ days;</p>
- <p>if $Y$ is a multiple of $400$, then $366$ days.</p>

## Constraints

- $Y$ is an integer between $1583$ and $2023$, inclusive.

## Input

The input is given from Standard Input in the following format:

> $Y$

## Output

Print the number of days in the year $Y$ as an integer.

```input1
2023
```

```output1
365
```

$2023$ is not a multiple of $4$, so it has $365$ days.

```input2
1992
```

```output2
366
```

$1992$ is a multiple of $4$ but not a multiple of $100$, so it has $366$ days.

```input3
1800
```

```output3
365
```

$1800$ is a multiple of $100$ but not a multiple of $400$, so it has $365$ days.

```input4
1600
```

```output4
366
```

$1600$ is a multiple of $400$, so it has $366$ days.