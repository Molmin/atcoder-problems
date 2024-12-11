## ストーリー

F社のプロジェクトリーダーに就任したあなたの仕事は、チームメンバーに適切にタスクを割り振ることである。
現在取り組んでいるプロジェクトはいくつかのタスクからなり、
各チームメンバーの持つ技能レベルと各タスクごとの要求技能レベルに応じて、タスクの完了までにかかる日数の期待値が変化する。
経験豊富なあなたは、各タスクの要求技能レベルを正確に把握することが出来るが、就任したばかりのため、各チームメンバーの技能レベルはまだ全く分かっていない。
チームメンバーの技能レベルを徐々に見極めながら、適切にタスクを割り振ってほしい。

## 問題文

$N$ 個のタスクを $M$ 人のチームメンバーに割り振りたい。
各タスクは高々1人に割り振り、タスクが割り振られたチームメンバーにはそのタスクが完了するまで他のタスクを割り振ることは出来ない。
全部で $K$ 種類の技能があり、各チームメンバー $j$ には技能レベルを表す非負整数ベクトル $\bm{s_j} = (s_{j,1},\cdots,s_{j,K})$ が、各タスク $i$ には要求技能レベルを表す非負整数ベクトル $\bm{d_i} = (d_{i,1},\cdots,d_{i,K})$ がそれぞれ定まっている。
このうち、各チームメンバーの技能レベル $\bm{s_1},\cdots,\bm{s_M}$ は入力として与えられない。

$w_{i,j}:=\sum_{k=1}^K \max(0,d_{i,k}-s_{j,k})$ と定める。
チームメンバー $j$ にタスク $i$ を割り振った時、タスクの完了までには以下のように定める $t_{i,j}$ 日かかる。

1. $w_{i,j}=0$ の場合、$t_{i,j}=1$。
2. $w_{i,j} &gt; 0$ の場合、$-3$ 以上 $3$ 以下の整数値をとる一様乱数を $r_i$ として、$t_{i,j}=\max(1,w_{i,j}+r_i)$。

$t$ 日かかるタスクを $d$ 日目に開始した場合、$d+t-1$ 日目の終わりにそのタスクは完了する。
タスク間には依存関係があり、あるタスクを開始するためには、依存する全てのタスクが前日の終わりまでに完了していなければならない。
出来るだけ短い日数で全てのタスクを完了してほしい。

## 入出力

各入力値の範囲については入力生成の項を参照せよ。

まずはじめに、タスク数 $N$、チームメンバー数 $M$、技能数 $K$、依存関係数 $R$、各タスクの要求技能レベル $\bm{d_1},\cdots,\bm{d_N}$、依存するタスクの組のリスト $(u_1,v_1),\cdots,(u_R,v_R)$ が以下の形式で標準入力から与えられる。

```plain
$N$ $M$ $K$ $R$
$d_{1,1}$ $\cdots$ $d_{1,K}$
$\vdots$
$d_{N,1}$ $\cdots$ $d_{N,K}$
$u_1$ $v_1$
$\vdots$
$u_R$ $v_R$
```

$(u_i,v_i)$ は、タスク $v_i$ ($1\leq v_i\leq N$) がタスク $u_i$ ($1\leq u_i\leq N$) に依存しており、$v_i$ を開始する前に $u_i$ を完了しなければならないことを示している。
$u_i&lt;v_i$ を満たし、同じ$(u_i,v_i)$のペアは高々一回しか入力に含まれない。

次に、1日目から始め、毎日以下の2つの処理をせよ。

まず、その日にタスクを開始するチームメンバー $a_i$ ($1\leq a_i\leq M$) と担当するタスク $b_i$ ($1\leq b_i\leq N$) の組のリスト $(a_1,b_1),\cdots,(a_m,b_m)$ を以下の形式で標準出力に1行に出力せよ。

```plain
$m$ $a_1$ $b_1$ $\cdots$ $a_m$ $b_m$
```

<font color="red">**出力のあとは標準出力を flush しなければならない。**</font>そうしない場合、TLEとなる可能性がある。

次に、その日の終わりにタスクを完了したチームメンバーのリスト $f_1,\cdots,f_n$ ($1\leq f_1&lt;\cdots&lt;f_n\leq M$) が以下の形式で標準入力から1行で与えられる。

```plain
$n$ $f_1$ $\cdots$ $f_n$
```

全てのタスクが完了するか、$2000$ 日目が終了した場合、上記の入力の代わりに `-1` のみからなる行が入力として与えられるので、プログラムを終了せよ。

## 例

日数
Output
Input

事前情報

```plain
3 2 2 1
0 1
2 0
1 1
2 3
```

1日目
```plain
2 1 1 2 2
```
```plain
1 1
```

2日目
```plain
0
```
```plain
1 2
```

3日目
```plain
1 1 3
```
```plain
0
```

4日目
```plain
0
```
```plain
0
```

5日目
```plain
0
```
```plain
-1
```

## 得点

$D$ ($1\leq D\leq 2000$)日目の終わりに全てのタスクを完了した場合、$N+2000-D$ の得点が得られる。
$2000$ 日以内にタスクを全て完了出来なかった場合は、完了したタスクの総数を $T(&lt;N)$ として、$T$ の得点が得られる。

### テストケース数

- 暫定テスト 50個
- システムテスト 3000個、 コンテスト終了後に[seeds.txt](https://img.atcoder.jp/future-contest-2022-qual/seeds.txt)(md5=a90d2e3883a546dfb66a4215b8d7a995)を公開

各テストケースの得点の合計が提出の得点となる。
暫定テストでは、一つ以上のテストケースで不正な出力や制限時間超過をした場合、提出全体の判定がWAやTLEとなる。
システムテストでは、不正な出力や制限時間超過をした場合、そのテストケースのみ0点となる。
提出プログラムが異常終了した場合、 RE ではなく WA と判定される場合があるので注意せよ。

### 実行時間について

実行時間には多少のブレが生じます。
また、システムテストでは同時に大量の実行を行うため、暫定テストに比べて数%程度実行時間が伸びる現象が確認されています。
そのため、実行時間制限ギリギリの提出がシステムテストでTLEとなる可能性があります。
プログラム内で時間を計測して処理を打ち切るか、実行時間に余裕を持たせるようお願いします。

## 入力生成方法

$L$ 以上 $U$ 以下の整数値を一様ランダムに生成する関数を $\mathrm{randint}(L, U)$、
$L$ 以上 $U$ 未満の浮動小数値を一様ランダムに生成する関数を $\mathrm{randdouble}(L, U)$、
[標準正規分布](https://ja.wikipedia.org/wiki/%E6%AD%A3%E8%A6%8F%E5%88%86%E5%B8%83#%E6%A8%99%E6%BA%96%E6%AD%A3%E8%A6%8F%E5%88%86%E5%B8%83)から値を生成する関数を $\mathrm{randnormal}()$ と定義する。

### $N$、$M$、$K$、$R$ の生成

- $N=1000$ で固定
- $M=20$ で固定
- $K=\mathrm{randint}(10, 20)$
- $R=\mathrm{randint}(1000, 3000)$

### $d_{i,j}$ の生成

各 $i=1,\cdots,N$ に対して、以下のようにして $\bm{d_i} = (d_{i,1},\cdots,d_{i,K})$ を生成する。

$K$ 次元のベクトル $(d_{i,1}',\cdots,d_{i,K}')$ を $d_{i,j}'=|\mathrm{randnormal}()|$ により生成する。
$p_i=\frac{\mathrm{randdouble}(10,40)}{\sqrt{\sum_{j=1}^K d_{i,j}'^2}}$ を生成し、
$d_{i,j}=\mathrm{round}(p_i d'_{i,j})$ とする。

### $s_{i,j}$ の生成

各 $i=1,\cdots,M$ に対して、以下のようにして $\bm{s_i} = (s_{i,1},\cdots,s_{i,K})$ を生成する。

$K$ 次元のベクトル $(s_{i,1}',\cdots,s_{i,K}')$ を $s_{i,j}'=|\mathrm{randnormal}()|$ により生成する。
$q_i=\frac{\mathrm{randdouble}(20,60)}{\sqrt{\sum_{j=1}^K s_{i,j}'^2}}$ を生成し、
$s_{i,j}=\mathrm{round}(q_i s'_{i,j})$ とする。

### $(u_i,v_i)$ の生成

空集合 $E=\emptyset$ から開始し、$|E|=R$ になるまで以下の処理を繰り返すことで、依存するタスクの組の集合 $E=\{(u_1,v_1),\cdots,(u_R,v_R)\}$ を生成する。

$h=\mathrm{randint}(1,100)$ と $v=\mathrm{randint}(h+1,N)$ を生成し、$u=v-h$ として、$(u,v)$ を $E$ に追加する。

## ツール

- [ローカルテスター](https://img.atcoder.jp/future-contest-2022-qual/f4ca7c3336de23e5c8d1338981e38375.zip): 使用するには[Rust言語](https://www.rust-lang.org/ja)のコンパイル環境をご用意下さい。
- [Web版ビジュアライザ](https://img.atcoder.jp/future-contest-2022-qual/f4ca7c3336de23e5c8d1338981e38375.html)

### ツールで用いられる入出力ファイルの仕様

これらのツールでは、事前情報に加えて、隠れ情報である技能レベル $\bm{s_i}$ と、チームメンバー $j$ がタスク $i$ を完了するのに実際にかかる日数 $t_{i,j}$ を含む以下の形式の入力ファイルを用いています。

```plain
$N$ $M$ $K$ $R$
$d_{1,1}$ $\cdots$ $d_{1,K}$
$\vdots$
$d_{N,1}$ $\cdots$ $d_{N,K}$
$u_1$ $v_1$
$\vdots$
$u_R$ $v_R$
$s_{1,1}$ $\cdots$ $s_{1,K}$
$\vdots$
$s_{M,1}$ $\cdots$ $s_{M,K}$
$t_{1,1}$ $\cdots$ $t_{1,M}$
$\vdots$
$t_{N,1}$ $\cdots$ $t_{N,M}$
```

これらの情報があれば、提供されたテスターを用いる代わりに同等のテスターを各自実装することも可能です。

また、プログラムの出力において `#` から始まる行はコメントとして無視されます。
特に、`#s` から始まる行は、以下の形式で記述された技能レベルの予測値であると解釈され、ビジュアライズ時に使用されます。

```plain
#s $i$ $s_{i,1}$ $\cdots$ $s_{i,K}$
```
予測値は何度でも出力でき、同じ $i$ に対する予測値は上書き更新されます。
Web版のビジュアライザでは予測値の変化をアニメーションで確認できます。

例えば例で示した出力にコメント行を以下のように挿入することで、1日目に $s_1$ の予測値を $(0, 1)$ に、2日目に $s_2$ の予測値を $(1, 0)$ に更新することが出来ます。

```plain
2 1 1 2 2
#s 1 0 1
0
#s 2 1 0
1 1 3
0
0
```

コメント行は実際の提出でも無視されるため、そのままのプログラムを提出可能です。

## サンプルプログラム(Python)

```plain
`# assign random tasks to team member 1.
import sys
import random
# Prior information
n, m, d, r = list(map(int, input().split()))
task_difficulty = []
for i in range(n):
    task_difficulty.append(list(map(int, input().split())))
task_dependency = [[] for _ in range(n)]
for i in range(r):
    temp = list(map(int, input().split()))
    task_dependency[temp[1] - 1].append(temp[0] - 1)
# -1: not started
#  0: started
#  1: completed
task_status = [-1] * n
# -1: not assigned
#  k: assigned task k (1 &lt;= k &lt;= N)
member_status = -1
day = 0
while True:
    day += 1
    output = [0]
    # random search for tasks
    if member_status &lt; 0:
        tasklist = list(range(n))
        random.shuffle(tasklist)
        for task in tasklist:
            if task_status[task] != -1:
                continue
            ok = True
            for necessary in task_dependency[task]:
                if task_status[necessary] != 1:
                    # the dependent tasks have not been completed
                    ok = False
                    break
            if ok:
                # assign the task to team member 1
                task_status[task] = 0
                member_status = task
                output = [1, 1, task + 1]
                break
    str_output = map(str, output)
    print(" ".join(str_output))
    # After the output, you have to flush Standard Output
    sys.stdout.flush()
    temp = list(map(int, input().split()))
    if len(temp) == 1:
        if temp[0] == -1:
            # elapsed days == 2000, or all the tasks have been completed
            exit()
        else:
            # no change in state
            pass
    else:
        # one task has been completed
        task = member_status
        task_status[task] = 1
        member_status = -1
`
```