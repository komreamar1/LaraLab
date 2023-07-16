<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';

defineProps<{
    canLogin?: boolean;
    canRegister?: boolean;
    laravelVersion: string;
    phpVersion: string;
}>();
</script>

<template>
    <Head title="Welcome" />

    <div
        class="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-dark-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white"
    >
        <div v-if="canLogin" class="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
            <Link
                v-if="$page.props.auth.user"
                :href="route('dashboard')"
                class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >Dashboard</Link
            >

            <template v-else>
                <Link
                    :href="route('login')"
                    class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >Log in</Link
                >

                <Link
                    v-if="canRegister"
                    :href="route('register')"
                    class="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >Register</Link
                >
            </template>
        </div>

        <div class="max-w-7xl mx-auto p-6 lg:p-8">
            <div class="flex justify-center font-size">
           💳
            </div>

            <div class="mt-16">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    <a
                        href="/documentation"
                        class="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
                    >
                        <div>


                            <div
                                class="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full"
                            >
                               ℹ️
                            </div>

                            <h2 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">DOCUMENTATION</h2>


                            <p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                LARAVEL HAS WONDERFUL DOCUMENTATION COVERING EVERY ASPECT OF THE FRAMEWORK. WHETHER YOU
                                ARE A NEWCOMER OR HAVE PRIOR EXPERIENCE WITH LARALAB, WE RECOMMEND READING OUR
                                DOCUMENTATION WHEN YOU FIND ANY DIFICULTY .
                            </p>

                            <h2 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">SERVICE</h2>


                            <pre class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
 -- host=127.0.0.1 subnet=192.168.1.2:52966 app_url=http://localhost
                            </pre>   

                            <h2 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">NETSTAT</h2>
                            <pre class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed"> 
 -- command for reletivity system connection 
                            </pre>

                            <h2 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Freamwork</h2>
                            <pre class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed"> 
    - git clone https://github.com/komreamar1/laraLab.git
    - git branch -m main freamwork
    - git fetch origin
    - git branch -u origin/freamwork freamwork
    - git remote set-head origin -a
                            </pre>     

                                <h2 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">GUIDE-terminal</h2>
                            <pre class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed"> 
## How? to run PHP SERVER with LARAVEL application Freamwork
- php artisan serve
## How? to run VUE ADMIN controll with VITE application Freamwork
- npm run dev
## How? to run REACT USER controll with WEBPACK application Freamwork
- npm run start

                            </pre>

                        </div>

                        ⏭️
                    </a>

                    <a
                        href="/police"
                        class="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
                    >



                        <div>
                            <div
                                class="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full"
                            >
                              👮🏻
                            </div>

                            <h2 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">POLICE</h2>

                            <p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                THESE ARE TO REQUEST AND REQUIRE IN THE NAME OF THE PRESIDENT OF THE REPUBLIC OF INDIA .ALL THOSE TO WHOM IT MAY CONCERN TO ALLOW THE BEARER TO PASS FREELY WITHOUT LET OR HINDRANCE AND TO AFFORD HIM OR HER, EVERY ASSISTANCE AND PROTECTION OF WHICH HE OR SHE MAY STAND IN NEED.
                            </p>

                            <h2 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">REGISTRATION</h2>

                            <p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                INDIAN CITIZENS RESIDENT ABROAD ARE ADVISED TO REGISTER THEMSELVES <u>AT THE NEAREST INDIAN MISSION/POST</u> AADHAAR
                            </p>

                            <h2 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">CAUTION vs ACCOUNT</h2>

                             <p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                THIS PASSPOST IS THE PROPERTY OF THE <u>GOVERNMENT OF INDIA</u> AADHAAR. ANY COMMUNICATION RECEIVED BY THE ACCOUNT HOLDER FROM THE PASSPORT AUTHORITY REGARDING THIS PASSPORT, INCLUDING <u>DEMAND FOR ITS SURRENDER</u> FEDERAL BANK ACCOUNT, SHOULD BE COMPLIED WITH IMMEDIATELY.
                                 </p>
                              <p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                               <b>Q1.: THIS PASSPORT  <u> SHOULD NOT</u> SENT OUT OF ANY COUNTRY BY POST ?</b>
                                <br>
                                <b>ANS :.</b> this should be in the custody either of the account holder or <u>the government of india/the republic of india</u> it must not be <u>altered or mutilated/merrage</u> <u>in/out</u> any way.
                                </p>
                              <p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                <b>eg:</b> Loss, Theft Or Destruction Of This Passport Should Be Immediately Reported To The Nearest Passport Authority In India Or If The Account Holder Is Abroad. To The Nearest Indian Mission/post And To The
                                Local Police Only After Exhaustive/beging Enquiries/police-counter Shall A duplicate/negetive/electronics passport/card/aadhaar Should Be Issued.

                            </p>

<br>
                            <span>
                                <b class="mt-2 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                BY ORDER OF <br>
                                THE PRESIDENT OF THE REPUBLIC OF INDIA
                                <pre>(passport : V4904657)</pre>
                            </b>
                            </span>
                        </div>

                       ⏭
                    </a>

                    <a
                        href="/bank"
                        class="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
                    >
                        <div>
                            <div
                                class="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full"
                            >
                                🏦
                            </div>

                            <h2 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">BANK</h2>

                            <p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                LARAVEL NEWS IS A COMMUNITY DRIVEN PORTAL AND NEWSLETTER AGGREGATING ALL OF THE LATEST
                                AND MOST IMPORTANT NEWS IN THE LARAVEL ECOSYSTEM, INCLUDING NEW PACKAGE RELEASES AND
                                TUTORIALS.
                            </p>
                        </div>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            class="self-center shrink-0 stroke-red-500 w-6 h-6 mx-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                            />
                        </svg>
                    </a>

                    <div
                        class="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
                    >
                        <div>
                            <div
                                class="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full"
                            >
                                🧪
                            </div>

                            <h2 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">LABRETORY</h2>

                            <p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                LARAVEL'S ROBUST LIBRARY OF FIRST-PARTY TOOLS AND LIBRARIES, SUCH AS
                                <a
                                    href="https://forge.laravel.com"
                                    class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >Forge</a
                                >,
                                <a
                                    href="https://vapor.laravel.com"
                                    class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >Vapor</a
                                >,
                                <a
                                    href="https://nova.laravel.com"
                                    class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >Nova</a
                                >, and
                                <a
                                    href="https://envoyer.io"
                                    class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >Envoyer</a
                                >
                                HELP YOU TAKE YOUR PROJECTS TO THE NEXT LEVEL. PAIR THEM WITH POWERFUL OPEN SOURCE
                                LIBRARIES LIKE
                                <a
                                    href="https://laravel.com/docs/billing"
                                    class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >Cashier</a
                                >,
                                <a
                                    href="https://laravel.com/docs/dusk"
                                    class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >Dusk</a
                                >,
                                <a
                                    href="https://laravel.com/docs/broadcasting"
                                    class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >Echo</a
                                >,
                                <a
                                    href="https://laravel.com/docs/horizon"
                                    class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >Horizon</a
                                >,
                                <a
                                    href="https://laravel.com/docs/sanctum"
                                    class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >Sanctum</a
                                >,
                                <a
                                    href="https://laravel.com/docs/telescope"
                                    class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >Telescope</a
                                >, and more.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-center mt-16 px-6 sm:items-center sm:justify-between">
                <div class="text-center text-sm text-gray-500 dark:text-gray-400 sm:text-left">
                    <div class="flex items-center gap-4">
                        <a
                            href="https://github.com/sponsors/taylorotwell"
                            class="group inline-flex items-center hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                class="-mt-px mr-1 w-5 h-5 stroke-gray-400 dark:stroke-gray-600 group-hover:stroke-gray-600 dark:group-hover:stroke-gray-400"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                            </svg>
                            Sponsor
                        </a>
                    </div>
                </div>

                <div class="ml-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:text-right sm:ml-0">
                    Laravel v{{ laravelVersion }} (PHP v{{ phpVersion }})
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.bg-dots-darker {
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
}
@media (prefers-color-scheme: dark) {
    .dark\:bg-dots-lighter {
        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
    }
}
</style>
