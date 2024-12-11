Score : $100$ points

## Problem Statement

Given is a string $S$ representing the day of the week today.

$S$ is `SUN`, `MON`, `TUE`, `WED`, `THU`, `FRI`, or `SAT`, for Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, and Saturday, respectively.

After how many days is the next Sunday (tomorrow or later)?

## Constraints

- $S$ is `SUN`, `MON`, `TUE`, `WED`, `THU`, `FRI`, or `SAT`.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the number of days before the next Sunday.

```input1
SAT
```

```output1
1
```

It is Saturday today, and tomorrow will be Sunday.

```input2
SUN
```

```output2
7
```

It is Sunday today, and seven days later, it will be Sunday again.